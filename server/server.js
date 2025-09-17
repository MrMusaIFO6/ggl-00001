const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();
app.use(cors());

app.get('/search', async (req,res)=>{
  const q = req.query.q || 'Islamic';
  try{
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params:{
        key:'YOUR_API_KEY',
        cx:'YOUR_CX',
        q:q
      }
    });
    res.json(response.data);
  }catch(e){
    res.status(500).json({error:e.message});
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
