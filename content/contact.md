+++
date = "2014-11-09T13:49:44+04:00"
draft = false
title = "Contatti"
slug = "contact"
+++
Se hai delle osservazioni su ciò che hai trovato in questo blog, se vuoi esprimere il tuo apprezzamento o muovere delle critiche, se desideri proporre una **collaborazione** o **pubblicare** un tuo scritto, compila il form qui sotto, specificando di che si tratta.

Per proporre una collaborazione o una pubblicazione, innanzitutto raccontaci di te in poche righe, senza esagerare con i dettagli e spiegandoci il motivo del tuo interesse. Si accettano collaborazioni anche da parte di **illustratori, web designer**  etc.


<style>
  .select-wrapper {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  .select-wrapper select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: calc(100% - 40px); /* Aggiunto padding per compensare la larghezza della freccetta */
    padding-right: 30px;
  }

  .select-wrapper:after {
    content: "\25BC";
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    pointer-events: none;
  }

  body {
    background-image: url({{ .Site.BaseURL }}/images/contact-background.png);
    background-size: cover;
    background-repeat: no-repeat;
  }


</style>

<div class="py2">
  <form action="https://formspree.io/f/xgejonav" method="POST" class="form-stacked form-light" id="contact-form">
    <input type="text" name="name" class="input mobile-block" placeholder="Nome" required>
    <input type="text" name="email" class="input mobile-block" placeholder="Il tuo indirizzo e-mail" required>
    <div class="select-wrapper">
      <select name="subject" class="input mobile-block" required>
        <option value="" selected disabled>Tipo di richiesta</option>
        <option value="suggerimento">Suggerimento</option>
        <option value="collaborazione">Collaborazione</option>
        <option value="pubblicazione">Pubblicazione</option>
      </select>
    </div>
    <textarea type="text" name="content" class="input mobile-block" rows="5" placeholder="Inserisci qui il tuo messaggio" required></textarea>
    <input type="submit" class="button button-blue button-big mobile-block" value="Invia">
  </form>
</div>

<script>
  document.getElementById("contact-form").addEventListener("submit", function(event) {
    var form = event.target;
    var fields = form.querySelectorAll("[required]");
    var isValid = true;

    for (var i = 0; i < fields.length; i++) {
      if (!fields[i].value.trim()) {
        isValid = false;
        fields[i].classList.add("error");
      } else {
        fields[i].classList.remove("error");
      }
    }

    if (!isValid) {
      event.preventDefault();
    }
  });
</script>
