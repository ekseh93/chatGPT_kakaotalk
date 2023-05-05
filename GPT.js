const scriptName = "gpt";
let key = "key"; // openAI GPT api key
function response(room, msg, sender, isGroupChat, replier, imageDB, packageName) {
  if (msg.startsWith("!! ")) {    // 명령어 "!! 메세지"
    cmd = msg.substr(3);
    replier.reply("[답변] \n" + getResponse(cmd));
  }
}
function getResponse(msg) {
  let result;
  let data = {
  "model": "gpt-3.5-turbo",  // gpt model name
  "messages": [{
  "role": "user", 
  "content": msg}], 
  "temperature": 0.2,     // 생성된 텍스트의 임의성, 값이 낮을수록 집중해서 정확도가 높아짐
  "max_tokens": 1024,
  "top_p": 0.5,           // 생성된 텍스트의 다양성, 값이 높을수록 다양하고 예측하기 어려움
  "frequency_penalty": 2.0,   // 값이 높을수록 다양하고 독창적
  "presence_penalty": 2.0};   // 값이 높을수록 단어를 반복하지 않음
  try {
    let response = org.jsoup.Jsoup.connect("https://api.openai.com/v1/chat/completions").header("Content-Type", "application/json").header("Authorization", "Bearer " + key).requestBody(JSON.stringify(data)).ignoreContentType(true).ignoreHttpErrors(true).timeout(1000000).post();
    result1 = JSON.parse(response.text());
    result = result1.choices[0].message.content;
  }  catch (e) {
  result = e;
}
  return result;
}
