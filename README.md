# Sentiment Analysis App (Full-Stack) 🚀

هذا المشروع هو تطبيق متكامل لتحليل مشاعر النصوص (Sentiment Analysis) باستخدام Node.js في الخلفية و React في الواجهة الأمامية.

## 🛠 التقنيات المستخدمة (Tech Stack)
- **Frontend:** React.js, Axios, CSS3.
- **Backend:** Node.js, Express.
- **NLP Library:** [Natural](https://www.npmjs.com/package/natural) (Using PorterStemmer & AFINN).

## 💡 المميزات
- تحليل فوري للنصوص باللغة الإنجليزية.
- واجهة مستخدم متجاوبة (Responsive UI).
- معالجة ذكية للكلمات (Tokenization & Stemming).
- تصنيف النتيجة لـ (إيجابي، سلبي، محايد) مع تلوين الواجهة بناءً على النتيجة.

## 🚀 طريقة التشغيل (Installation)

### 1. تشغيل السيرفر (Backend)
```bash
cd backend
npm install
node server.js
