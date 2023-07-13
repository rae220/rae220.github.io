
//set up the option arrays in object message

const message ={
    about : ['job','love life', 'family', 'friends'],
    should:[' trust no one', 'be more careful', 'keep quiet', 'put the past behind you', 
            'observe closely', 'stand up and be counted', 'tell the truth'],
    colour:['crimson', 'azure', 'mustard', 'sage', 'lavender'],

// method to generate 3 random phrases
    randomGen () {
        let phrases3 = [];
        let theTruth = '';
        let i = Math.floor(Math.random()*this.about.length);
        phrases3[0] = this.about[i];
        i = Math.floor(Math.random()*this.should.length);
        phrases3[1] = this.should[i];
        i = Math.floor(Math.random()*this.colour.length);
        phrases3[2] = this.colour[i];

        theTruth = format(phrases3, theTruth);
        return theTruth;

    }

}

// function to piece the phrases into a structured sentence
const format = (phrases, truth) =>{ 
    let initialMsg = 'The universe has spoken ...\n\n'
    let advice = `The message is about your ${phrases[0]} \n 
                 I sense you should ${phrases[1] } \n
                 For a positive outcome wear the colour ${phrases[2]} `;
     truth = initialMsg + advice;
     return truth;
}

// GET YOUR ADVICE !!
console.log(message.randomGen());

