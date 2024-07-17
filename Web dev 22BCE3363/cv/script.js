// CONTACT ME
function scrollToContact() {
    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  }




  //DOWNLOAD MY RESUME
function downloadResume() {
    const resumeUrl = 'resume.pdf';
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.setAttribute('download', 'resume.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
document.getElementById('downloadButton').addEventListener('click', downloadResume);




document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('myContactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const message = document.getElementById('message').value;
        console.log("Name:", name);
        console.log("Email:", email);
        console.log("Phone:", phone);
        console.log("Message:", message);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('message').value = '';
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('myModal');
    const span = document.getElementsByClassName('close')[0];
    function showModal() {
        modal.style.display = 'block';
        setTimeout(function () {
            modal.style.display = 'none';
        }, 5000);
    }
    span.onclick = function () {
        modal.style.display = 'none';
    };
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
    const form = document.getElementById('myContactForm');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        showModal();
    });
});



// The typing GIF

const words = ["Python", "JavaScript", "HTML5" , "CSS" , "Kotlin" , "C++" , "Java" ,"Assembly" , "Machine Learning" ];
  let currentWordIndex = 0;

  function typeEffect(header, newText, speed, callback) {
    let index = 0;

    function typeCharacter() {
      header.innerText = newText.substring(0, index + 1);
      index++;
      if (index >= newText.length) {
        clearInterval(interval);
        if (callback) {
          setTimeout(callback, 500);
        }
      }
    }

    const interval = setInterval(typeCharacter, speed);
  }

  function backspaceEffect(header, callback) {
    let currentText = header.innerText;
    let index = currentText.length;

    function deleteCharacter() {
      header.innerText = currentText.substring(0, index - 1);
      index--;
      if (index <= 0) {
        clearInterval(interval);
        if (callback) {
          callback();
        }
      }
    }

    const interval = setInterval(deleteCharacter, 100);
  }

  function typeNextWord(header) {
    backspaceEffect(header, () => {
      currentWordIndex = (currentWordIndex + 1) % words.length;
      const nextWord = words[currentWordIndex];
      typeEffect(header, nextWord, 100, () => {
        setTimeout(() => {
          typeNextWord(header);
        }, 1000);
      });
    });
  }

  const header = document.getElementById('head');
  typeNextWord(header);

