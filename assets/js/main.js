let vier = document.getElementById('vier')
let fünf = document.getElementById('fünf')
let sechs = document.getElementById('sechs')
let custom = document.getElementById('custom')
let customAnzahl = document.getElementById('anzahl')
let number = document.getElementById('number')
let result = document.getElementById('result')
let versuch = document.getElementById('versuch')
let versuchLimit = document.getElementById('versuchLimit')
let form = document.getElementById('form')
let h2 = document.getElementById('h2')
let count = 0;

let customInput = () => {
  if (custom.checked) {
    customAnzahl.style.display = "block"
  }

}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
let zahl = getRandomInt(100)
console.log(zahl);
let guess = () => {
  limit = 0;
  result.style.display = "block"

  if (vier.checked) {
    form.style.display = 'none'
    limit = 4
    count++
    versuch.innerHTML = count;
    versuchLimit.innerHTML = limit;
    h2.style.display = 'block'
    if (count < limit) {
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
      if (zahl == number.value) {
        result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
      } else {
        result.innerHTML += `<p>${count}-<a href="index.html">You lost. Play again!</a></p> </p>`
      }
    }
  }
  else if (fünf.checked) {
    form.style.display = 'none'
    limit = 5
    count++
    versuch.innerHTML = count;
    versuchLimit.innerHTML = limit;
    h2.style.display = 'block'
    if (count < limit) {
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
    versuch.innerHTML = count;
    versuchLimit.innerHTML = limit;
    h2.style.display = 'block'
    if (count < limit) {
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
    versuch.innerHTML = count;
    versuchLimit.innerHTML = limit;
    h2.style.display = 'block'
    if (count < limit) {
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
      if (zahl == number.value) {
        result.innerHTML += `<p>${count}- Yes you got me in ${count} guesses. I'm ${zahl}.<a href="index.html">You win. Play again!</a></p>`
      } else {
        result.innerHTML += `<p>${count}-<a href="index.html">You lost. Play again!</a></p> </p>`
      }
    }
  }
}
