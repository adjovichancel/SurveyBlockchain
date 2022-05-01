class Form{
    constructor(){
        this.greeting = createElement('h2');
        this.input = createInput("");
        this.input.style('width', '160px');
        this.email = createInput("");
        this.email.style('width', '160px');
        this.button = createButton('Envoyer'); 
        this.title = createElement('h2');
        this.name = createElement('h4');
        this.emailinput = createElement('h4');
        this.reset = createButton('Réinitialiser');


        this.button.style('width','100px');
        this.button.style('height','30px');
        this.button.style('background','lavender');

        this.reset.style('width','100px');
        this.reset.style('height','30px');
        this.reset.style('background','lavender');

        //question 1
        this.question1 = createElement('h4', "Dans l'ensemble, comment évaluez-vous l'événement ?");
        this.radio = createRadio('h4');
        this.radio.option('Excellent');
        this.radio.option('Bonne');
        this.radio.option('Pas mal');
        this.radio.option('Mauvais');
        this.radio.style('width', '160px');




        //question 2
        this.question2 = createElement('h4', "Comment était organisé l'événement ?");
        this.radio1 = createRadio('h5');
        this.radio1.option('Très organisé');
        this.radio1.option('Plutôt organisé');
        this.radio1.option('Pas si organisé');
        this.radio1.option('Pas du tout organisé');
        this.radio1.style('width', '220px');

        //question 3
        this.question3 = createElement('h4', "À quel point le personnel était-il sympathique?");
        this.radio2 = createRadio('h5');
        this.radio2.option('Très utile');
        this.radio2.option('Un peu utile');
        this.radio2.option('Pas si utile');
        this.radio2.option('Pas du tout utile');
        this.radio2.style('width', '200px');

        //question 4
        this.question4 = createElement('h4', "Dans quelle mesure le personnel était-il serviable ?");
        this.radio3 = createRadio('h5');
        this.radio3.option('Très utile');
        this.radio3.option('Un peu utile');
        this.radio3.option('Pas si utile');
        this.radio3.option('Pas du tout utile');
        this.radio3.style('width', '200px');

        this.description = createInput("Please add your comments here");
        this.description.style('width','420px');
        this.description.style('height','100px');

        this.desc= createElement('h4',"Qu'avez-vous aimé de l'événement ?");

        this.description1 = createInput("Please add your comments here");
        this.description1.style('width','420px');
        this.description.style('height','90px');

      //  this.desc1 = createElement('h4',"Qu'est-ce que vous n'avez pas aimé dans l'événement ?");

        

        
    }
    display(){
        this.title.html("Survey Blockchain");
        this.title.position(displayWidth/2 + 50 ,20);
        this.name.html("Votre Nom");
        this.name.position(displayWidth/2 + 50 ,125);
        this.input.position(displayWidth/2 + 170 , 155);
        this.emailinput.html("Votre Mail");
        this.emailinput.position(displayWidth/2 + 50 ,200);
        this.email.position(displayWidth/2 + 170 ,225);
        this.button.position(displayWidth/2 + 100, displayHeight-140);
        this.reset.position(displayWidth/2 + 300, displayHeight-140);

        this.question1.position(displayWidth/2-100, 300);
        this.radio.position(displayWidth/2 +150, 360);
        
        this.question2.position(displayWidth/2-100, 400);
        this.radio1.position(displayWidth/2 +150, 460);

        this.question3.position(displayWidth/2-100, 500);
        this.radio2.position(displayWidth/2 +150, 560);

        this.question4.position(displayWidth/2-100, 640);
        this.radio3.position(displayWidth/2 +150, 700);

        this.desc.position(displayWidth/2-100,750);

        this.description.position(displayWidth/2 +30,810);
        this.description.style('color', 'rgb(237, 227, 227)');
        this.description.style('font-size', '20px');

        // this.desc1.position(displayWidth/2-100, 890);
        // this.description1.position(displayWidth/2 +30, 950);
        // this.description1.style('color', 'rgb(237, 227, 227)');
        // this.description1.style('font-size', '20px');

       

        this.button.mousePressed(() => {
         
            this.greeting.show();
            this.description.hide();
            this.greeting.html("Merci pour le temps!!");
            this.greeting.position(displayWidth/2-30,810);
            this.greeting.style('width', '500px');
            this.greeting.style('height', '50px');
            this.greeting.style('background','lavender');
            this.greeting.style('padding','30px');
            User.input = this.input.value();
            User.email = this.email.value();
            User.radio= this.radio.value();
            User.radio1= this.radio1.value();
            User.radio2= this.radio2.value();
            User.radio3= this.radio3.value();
            peopleCount += 1;
            User.index = peopleCount;
            User.update();
            User.updateCount(peopleCount);
            

            
        });
        this.reset.mousePressed(() => { 
          this.greeting.hide();
          this.description.show();
          this.input.value('');
          this.email.value('');
          this.radio.value();
          this.radio1.value();
          this.radio2.value();
          this.radio3.value();
        });    
    }
}