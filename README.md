🐺 Wolfenkunst - Projekt-Dokumentation
Dieses Repository enthält den Code für die offizielle Website von Wolfenkunst. Die Seite wurde für ein minimalistisches, urbanes Design optimiert, das die Ästhetik von handgefertigter Betonkunst widerspiegelt.

🛠 Letzte Änderungen & Updates
1. Logo-Rebranding (SVG)
Positionierung: Die Positionierung erfolgt über das transform-Attribut im SVG (translate und scale), um eine perfekte optische Mitte innerhalb der Typografie zu erreichen.

Dynamische Farben: Verwendung von stroke="var(--accent)", damit das Logo im Darkmode automatisch die Farbe wechselt.

2. Kontaktseite & Layout
Zwei-Spalten-Design: Die Kontaktseite wurde auf ein Flexbox-Layout umgestellt. Das Formular befindet sich links, während rechts ein großes, dekoratives Wolf-Icon den Raum füllt.

Responsive Verhalten: Auf mobilen Endgeräten (max-width: 900px) wechselt das Layout in einen einspaltigen Modus, wobei das Logo über dem Formular erscheint.

3. Kontaktformular-Logik
Asynchrones Senden (AJAX): Das Formular sendet Daten im Hintergrund an den Endpunkt (z. B. Formspree), ohne die Seite neu zu laden.

Bestätigungsnachricht: Nach erfolgreichem Absenden wird das Formular sanft ausgeblendet und durch eine „ANFRAGE ÜBERMITTELT“-Meldung ersetzt.

E-Mail-Anbindung: Vorbereitet für Dienste wie Formspree durch Nutzung der POST-Methode und Verknüpfung der Eingabefelder.

4. Bugfixes & Optimierungen
Syntax-Korrektur: Ein fehlerhafter HTML-Tag (<<header>) auf der Startseite wurde korrigiert, der das Layout und die Darkmode-Funktion blockierte.

SVG-Viewbox: Die Viewbox-Werte wurden angepasst, um sicherzustellen, dass keine Teile des Logos an den Rändern abgeschnitten werden.

Typografie: Die Schriftart Orbitron wurde als zentrales Branding-Element in allen Headern und im Logo gefestigt.
