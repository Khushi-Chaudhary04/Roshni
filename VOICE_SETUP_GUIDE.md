# Voice Narration Setup & Testing Guide

## ✅ What's Fixed
- **Backend:** gTTS integrated and working (generates MP3 audio)
- **Frontend:** Updated to use fetch + blob for reliable audio loading
- **API:** `/api/voice/narrate` endpoint tested and working

## 🚀 How to Run

### 1. Backend Setup (Terminal 1)
```bash
cd /home/khushi/Downloads/Roshni/backend
python3 -m venv venv
source venv/bin/activate  # or . venv/bin/activate on Windows
pip install -r requirements.txt
uvicorn main:app --host 0.0.0.0 --port 8000 --reload
```

**Expected Output:**
```
INFO:     Uvicorn running on http://0.0.0.0:8000
[HH:MM:SS] INFO - 🌞 ROSHNI Backend Starting...
```

### 2. Frontend Setup (Terminal 2)
```bash
cd /home/khushi/Downloads/Roshni/frontend
npm install
npm run dev
```

**Expected Output:**
```
VITE v5.x.x  ready in XXX ms
➜  Local:   http://localhost:5173/
```

### 3. Test Voice Narration

#### Option A: Via BillingPage
1. Open http://localhost:5173
2. Navigate to Billing page
3. Select a bill
4. Click the **speaker icon** button
5. Should hear Hindi narration: "आपके खाते में ₹X की वापसी है।"

#### Option B: Via API (curl)
```bash
# Generate voice
curl -X POST http://localhost:8000/api/voice/narrate \
  -H "Content-Type: application/json" \
  -d '{"text":"नमस्ते, परीक्षण सफल है।"}'

# Response:
# {"status": "success", "audio_url": "/voice/latest"}

# Download audio
curl -o test.mp3 http://localhost:8000/api/voice/latest
# Then play: `play test.mp3` or open in browser
```

## 🐛 Troubleshooting

### Issue: "Audio failed to load"
**Cause:** Backend not running or gTTS not installed  
**Solution:** 
1. Ensure backend is running on port 8000
2. Check `/api/voice/narrate` responds with 200 status
3. Verify gTTS is installed: `pip list | grep gTTS`

### Issue: Backend module not found
**Cause:** Virtual environment not activated  
**Solution:**
```bash
source venv/bin/activate  # Linux/Mac
.\venv\Scripts\activate   # Windows
```

### Issue: CORS errors in console
**Solution:** Already fixed in latest backend config  
- CORS is set to allow all origins (`"*"`)
- Frontend uses fetch + blob approach

## 📝 Environment Config

**Backend (.env required):**
```
ENVIRONMENT=development
DEBUG=true
DATABASE_URL=sqlite:///./roshni.db
ALGORAND_ADMIN_MNEMONIC=<your-mnemonic>
SUN_ASA_ID=756341116
```

**Frontend (.env optional):**
```
VITE_API_URL=http://localhost:8000/api
```

## ✨ Current Implementation
- **TTS Engine:** gTTS (Google Text-to-Speech)
- **Languages:** Hindi (hi), English (en), and 100+ others
- **Quality:** Natural voice, good for narration
- **Cost:** FREE (no API key needed)
- **Speed:** ~1-2 seconds to generate per sentence

## 🎤 What Gets Narrated
1. **BillingPage:** Bill summary (earnings/credits)
2. **BuyerDashboard:** Allocation result + savings
3. **SellerDashboard:** Daily earnings summary

---

**Need Help?** Check backend logs:
```bash
tail -f backend/logs/app.log
```
