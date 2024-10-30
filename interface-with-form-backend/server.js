const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());


app.get('/api', (req,res) => {
    res.send('Hello World')
})

app.post('/', (req,res) => {
    const {input1, input2, input3, input4, input5} = req.body;
    // marks = input3
    // const text = () => (marks == 1) ? 'mark' : 'marks';
    const markdown = `


## Document

**First Name:** ${input1}  
**Last Name:** ${input2}  
**Marks:** ${input3}  
**Email:** ${input4}  
**Option Chosen:** ${input5}
#### NOTE : Hello ${input1} ${input2} you got ${input3} ${(input3 == 1) ? 'mark' : 'marks'}.
`;

    res.json({markdown});
})

app.listen(8000, () => {
    console.log('Server Connected at port 8000')
})