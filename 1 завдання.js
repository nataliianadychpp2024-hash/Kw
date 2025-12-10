<!doctype html>
<html lang="uk">
<head>
  <meta charset="utf-8" />
  <title>Найдовша назва виду спорту</title>
</head>
<body>
  <h1>Найдовша назва</h1>
  
  <script>
   for (let i = 1; i <= 3; i++) {
        let sport = prompt("Введіть вид спорту №" + i + ":");
        if (sport === null) { 
            alert("Скасовано");
            break;
        }
        sports.push(sport.trim());
    }
sports.sort((a, b) => a.length - b.length);

    document.write("<p style='font-size:30px; font-weight:bold; font-style:italic; color:green;'>");
    document.write("Відсортовані назви спорту за довжиною:<br>");

    for (let sport of sports) {
        document.write(sport + "<br>");
    }

    document.write("</p>");
</script>

</body>
</html>
