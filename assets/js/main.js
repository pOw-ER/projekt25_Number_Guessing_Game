const vier = document.getElementById('vier')
const fünf = document.getElementById('fünf')
const sechs = document.getElementById('sechs')
const custom = document.getElementById('custom')
const customAnzahl = document.getElementById('anzahl')
const number = document.getElementById('number')
const result = document.getElementById('result')
const versuch = document.getElementById('versuch')
const versuchLimit = document.getElementById('versuchLimit')
const form = document.getElementById('form')
const warnung = document.getElementById('warnung')
const h2 = document.getElementById('h2')
let count = 0;

// custom function
let customInput = () => {
  if (custom.checked) {
    customAnzahl.style.display = "block"
  } else {
    customAnzahl.style.display = "none"
  }
}
// Random function
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max) + 1);
}
let zahl = getRandomInt(100)

//guess function
let guess = () => {
  limit = 0;
  result.style.display = "block"
  if (number.value > 0) {
    warnung.style.display = "none"
    if (vier.checked) {
      form.style.display = 'none'
      limit = 4
      count++
      h2.style.display = 'block'
      if (count < limit) {
        versuch.innerHTML = count;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          if (zahl > number.value) {
            result.innerHTML += `<p>${count}- You need to guess higher than ${number.value}. Try again...</p>`
          } else {
            result.innerHTML += `<p>${count}- You need to guess lower than ${number.value}. Try again...</p>`
          }
        }
      } else if (count == limit) {
        versuch.innerHTML = limit;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          result.innerHTML += `<p>${count}-<a href="index.html">You lost. Play again!</a></p></p>`
        }
      }
    }
    else if (fünf.checked) {
      form.style.display = 'none'
      limit = 5
      count++
      h2.style.display = 'block'
      if (count < limit) {
        versuch.innerHTML = count;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          if (zahl > number.value) {
            result.innerHTML += `<p>${count}- You need to guess higher than ${number.value}. Try again...</p>`
          } else {
            result.innerHTML += `<p>${count}- You need to guess lower than ${number.value}. Try again...</p>`
          }
        }
      } else if (count == limit) {
        versuch.innerHTML = limit;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          result.innerHTML += `<p>${count}-<a href="index.html">You lost. Play again!</a></p> </p>`
        }
      }
    }
    else if (sechs.checked) {
      form.style.display = 'none'
      limit = 6
      count++
      h2.style.display = 'block'
      if (count < limit) {
        versuch.innerHTML = count;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          if (zahl > number.value) {
            result.innerHTML += `<p>${count}- You need to guess higher than ${number.value}. Try again...</p>`
          } else {
            result.innerHTML += `<p>${count}- You need to guess lower than ${number.value}. Try again...</p>`
          }
        }
      } else if (count == limit) {
        versuch.innerHTML = limit;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          result.innerHTML += `<p>${count}-<a href="index.html">You lost. Play again!</a></p> </p>`
        }
      }
    } else {
      form.style.display = 'none'
      limit = customAnzahl.value;
      count++
      h2.style.display = 'block'
      if (count < limit) {
        versuch.innerHTML = count;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          if (zahl > number.value) {
            result.innerHTML += `<p>${count}- You need to guess higher than ${number.value}. Try again...</p>`
          } else {
            result.innerHTML += `<p>${count}- You need to guess lower than ${number.value}. Try again...</p>`
          }
        }
      } else if (count == limit) {
        versuch.innerHTML = limit;
        versuchLimit.innerHTML = limit;
        if (zahl == number.value) {
          result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
        } else {
          result.innerHTML += `<p>${count}-<a href="index.html">You lost. Play again!</a></p> </p>`
        }
      }
    }
  } else {
    warnung.style.display = "block"
  }
}
