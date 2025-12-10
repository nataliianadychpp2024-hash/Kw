<!doctype html>
<html lang="uk">
  <head>
    <meta charset="utf-8" />
    <title> Зручна дата</title>
  </head>
  <body>
  <button onclick="askDate()">Ввести дату</button>
  
    <script>
    function askDate() {
    let userInput = prompt("Введіть дату, коли ви вільні (формат: РРРР-ММ-ДД):");
        
      if (!userInput) return;
      let userDate = new Date(userInput);
        let today = new Date();
      
      if (isNaN(userDate)) {
            alert("Невірний формат дати! Приклад: 2025-12-20");
            return;
        }
      let diffMs = userDate - today;
      let diffDays = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
    
      if (diffDays > 0) {
    
      alert("До цієї дати залишилося: " + diffDays + " днів.");
        } else if (diffDays === 0) {
            alert("Це сьогодні!");
        } else {
            alert("Ця дата вже минула на " + Math.abs(diffDays) + " днів.");
        }
      }
    </script>
  </body>
</html>
