const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.set("Content-Type", "text/html");
  res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        </head>
        <body>
            <div id="items" class="card-columns p-5">
            </div>
            <script>
                const itemesElement = document.getElementById('items')

                const renderUser = user => \`
                <div class="card border-primary mb-3" style="max-width: 18rem;">
                    <div class="card-header">\${user.id}</div>
                    <div class="card-body">
                        <h5 class="card-title text-primary">\${user.name} (\${user.age})</h5>
                        <p class="card-text text-secondary">\${user.email}</p>
                    </div>
                    </div>
                \`

                const fetchAndRenderUsers = () => fetch('/users').then(res => res.json()).then((data) => items.innerHTML = data.map(renderUser).join(''))

                setInterval(fetchAndRenderUsers, 1000)
            </script>
        </body>
        </html>`);
});

module.exports = router;
