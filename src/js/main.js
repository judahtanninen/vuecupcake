fetch('JSON/access.json')
.then(res => res.json())
.then(data => {
  let myParse = (data)
  console.log(myParse)

  let myInfo = "";
  for (i=0; i<myParse.RESPONSE.DETAILS.PEOPLE.PERSON.length; i++){
      let x=i+1;
      myInfo += x+". Name: ";
      myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].FIRSTNAME+" ";
      myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].LASTNAME+", ";
      myInfo += "ID: ";
      myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].PERSONID+", ";
      myInfo += "access to: "
      myInfo += myParse.RESPONSE.DETAILS.PEOPLE.PERSON[i].ACCESSLEVELS.ACCESSLEVEL+" <br/>";
      myInfo += "<br/>";

      document.getElementById('info1').innerHTML = myInfo

}})
.catch(err => console.error(err));

