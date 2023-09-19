<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" integrity="sha384-rzpkuvo5m7tkgVuXH8tbya2YYElM8YlgVgKXBCyjBfgfGHPqqD8t5g5w5DOmkbcgT" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="./css/style.css">
    
    <title>Advergame Rugby</title>
</head>

<body>
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-12 text-center">
                <h1>Jeu de Rugby</h1>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-4">
                <div class="game-container">
                    <!-- Insérez ici le ballon pour la première colonne -->
                </div>
            </div>
            <div class="col-md-4">
                <div class="game-container">
                    <!-- Insérez ici le ballon pour la deuxième colonne -->
                </div>
            </div>
            <div class="col-md-4">
                <div class="game-container">
                    <!-- Insérez ici le ballon pour la troisième colonne -->
                </div>
            </div>
        </div>
        <div class="row mt-4">
            <div class="col-md-12 text-center">
                <div id="timer-container">
                    <label for="pays">Choisissez un pays :</label>
                    <select id="pays" name="pays">
                    </select>
                    <p>Temps écoulé: <span id="timer">0.00</span> secondes</p>
                </div>
                <button id="start-button" class="btn btn-primary">Démarrer le jeu</button>
                <div id="message" class="mt-3"></div>
            </div>
        </div>


        <!-- Modal d'inscription -->
        <div id="myModal" class="modal">
    <div class="modal-content">
        <span id="close-modal" class="close">&times;</span>
        <div id="modal-content">
            <h2>Inscrivez-vous pour gagner des lots des cadeaux au prochain tirage au sort!</h2>
            <p id="modal-message"></p>
            <form id="registration-form" class="registration-visible">
                <!-- Champs du formulaire -->
                <div class="form-group">
                    <label for="nom">Nom :</label>
                    <input type="text" id="nom" name="nom" required>
                </div>
                <div class="form-group">
                    <label for="email">Email :</label>
                    <input type="email" id="email" name="email" required>
                </div>
                <div class="form-group">
                    <input type="submit" value="S'inscrire">
                </div>
            </form>
        </div>
    </div>
</div>




    </div>
    </div>


    </div>
    <script src="./js/script.js"></script>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.min.js"></script>
    
</body>
</html>