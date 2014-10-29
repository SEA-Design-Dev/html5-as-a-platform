// $(document).ready(function() {

//   function load_happy() {
//     window.open("v-mood-happy.html");
//   }

//   function load_sad() {
//     window.open("v-mood-sad.html");
//   }

//   $("#happy_submit").click(load_happy);
//   $("#sad_submit").click(load_sad);

// });




//NEED TO MAKE THIS WORK WITH RADIO BUTTONS

// $(document).ready(function() {
//   function mood_select() {
//     $("input:radio[name=my_mood]").click(function() {
//       var mood = $(this).val();
//     });
//   }

//   function mood_submit() {
//     if (mood == "happy") {
//         // window.open("v-mood-happy.html");
//         ("#result").text("I'm Happy!");

//       }
//       else if (mood == "sad") {
//         // window.open("v-mood-sad.html");
//         ("#result").text("I'm Sad!");
//       }
//   }

//   $("#mood-submit").click(moodselect);

// });


//PULLED FROM PREVIOUS PROJECT AS A TEMPLATE

// $(document).ready(function () {
//   function load() {
//     if (localStorage["comment"]) {
//       $('#comment').val(localStorage["comment"]);
//     }
//     if (localStorage["post-one"]) {
//       $('#post-one').text(localStorage["post-one"]);
//     }
//     if (localStorage["post-two"]) {
//       $('#post-two').text(localStorage["post-two"]);
//     }
//     if (localStorage["post-three"]) {
//       $('#post-three').text(localStorage["post-three"]);
//     }
//   }

//   function save() {
//     localStorage[$(this).attr('id')] = $(this).val();
//   }

//   function submit() {
//     if (localStorage["comment"]){
//       if (localStorage["post-one"] == undefined){
//         localStorage["post-one"] = localStorage["comment"];
//       }
//       else if (localStorage["post-two"] == undefined){
//         localStorage["post-two"] = localStorage["post-one"];
//         localStorage["post-one"] = localStorage["comment"];
//       }
//       else{
//         localStorage["post-three"] = localStorage["post-two"];
//         localStorage["post-two"] = localStorage["post-one"];
//         localStorage["post-one"] = localStorage["comment"];
//       }
//       localStorage["comment"] = "";
//     }
//   }
// //   $('#comment').keyup(save);
// //   $('.submit-button').click(submit);
// //   load();
// // });
