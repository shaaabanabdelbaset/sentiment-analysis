const natural = require('natural');
const tokenizer = new natural.WordTokenizer();
const analyzer = new natural.SentimentAnalyzer('English', natural.PorterStemmer, 'afinn');

exports.analyze = (req, res) => {
    try {
        const { text } = req.body;

        if (!text || text.trim().length === 0) {
            return res.status(400).json({ error: "Text is required" });
        }

        // 1. تحويل النص لـ Tokens (كلمات منفصلة) وتنظيفه
        const tokens = tokenizer.tokenize(text.toLowerCase());

        // 2. تحليل المشاعر
        const score = analyzer.getSentiment(tokens);

        // 3. تحديد الحالة بناءً على "Threshold" (اختياري لكن أدق)
        let sentimentText;
        if (score > 0.2) {
            sentimentText = "إيجابي";
        } else if (score < -0.2) {
            sentimentText = "سلبي";
        } else {
            sentimentText = "محايد";
        }

        res.json({ 
            status: "success",
            result: {
                sentiment: sentimentText,
                score: parseFloat(score.toFixed(3)),
                wordCount: tokens.length
            }
        });

    } catch (error) {
        res.status(500).json({ error: "حدث خطأ أثناء تحليل النص" });
    }
};