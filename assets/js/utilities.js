let like = [];
let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser")).email;
function getLS(key) {
  return JSON.parse(localStorage.getItem(key));
}

function setLS(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function renderQueries() {
  const queries = getLS("query");

  let elems = "";

  for (let i = 0; i < queries.length; i++) {
    console.log(queries[i]);
    const { title, tag, desc, createdAt, createdBy, queryId } = queries[i];

    elems += `
      <div class='kitkat'>
        <p class='Date'>${createdAt}</p>
        <p class='User'>${title}</p>
        <span>
            <p class='tag'>${tag}</p>
        </span>
        <span>
            <p class='desc'>${desc}</p>
        </span><br>
        <span class='upspan' id='uspan'>
            <img class='up' src='../assets/images/up.png' width='50px' height='50px' alt='' data-id="${queryId}" data-index="${i}" data-emotion="${true}" onclick='emotion(event)' id='up${i}' />
        </span>
        <span class='downspan' id='dspan'>
            <img class='down' src='../assets/images/down.png' width='50px' height='50px' alt='' data-id="${queryId}" data-index="${i}" data-emotion="${false}" onclick="emotion(event)" id='down${i}'/>
        </span>
    </div>
      `;
  }

  const div = document.getElementById("new");
  div.innerHTML = elems;
}

renderQueries();

function emotion(event) {
  const elem = event.target;

  const { index, emotion, id } = elem.dataset;
  console.log(index, emotion, id);

  const query = getLS("query")[index];
  const userExist = checkUser();
  console.log("current index", index);
  if (userExist === -1) {
    updateEmotion(id, emotion);
  } else if (userExist >= 0) {
    console.log(userExist);
    let isToUpdate = checkEmotion(id, emotion);
    if (!isToUpdate) {
      console.log(isToUpdate);
      checkEmotion(id,emotion);
    }
  }
}

function checkUser() {
  const { email } = getLS("loggedInUser");
  const emotions = getLS("boolean");

  if (!emotion) {
    return -1;
  }

  let userEmotionIndex = -1;

  for (let _emo of emotions) {
    const userEmail = _emo.email;
    if (email === userEmail) {
      const index = emotions.indexOf(_emo);
      userEmotionIndex = index;
      break;
    }
  }

  return userEmotionIndex;
}

function checkEmotion(queryId, emotion) {
  const array_emotion = getLS("boolean");

  let emotionStatus = false;

  for (let i = 0; i < array_emotion.length; i++) {
    const singleEmotion = array_emotion[i].emotion;
    const exstingQueryId = array_emotion[i].queryId;

    if (exstingQueryId == queryId && emotion !== singleEmotion) {
      array_emotion[i].emotion = emotion;
      localStorage.setItem("boolean", JSON.stringify(array_emotion));
      emotionStatus = true;
      break;
    }
  }
  return emotionStatus;
}

function updateEmotion(queryId, emotion) {
  let object = { email: loggedInUser, emotion: emotion, queryId: queryId };
  console.log(object);
  let localStoragearray = JSON.parse(localStorage.getItem("boolean"));
  like = localStoragearray;
  like.push(object);
  localStorage.setItem("boolean", JSON.stringify(like));
}
