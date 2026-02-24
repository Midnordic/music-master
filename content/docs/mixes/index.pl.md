---
title: "Miksy"
icon: "🎛️"
description: "Miksuj wiele utworów w jedną całość."
weight: 30
---
Miksy są to utwory, które składają się z kilku innych utworów. Służą do tworzenia różnych efektów, poprzez nakładanie na siebie ścieżek dźwiękowych. Każdy z miksów powstał w celu wsparcia jednej z technik filmowych dostępnych w aplikacji. Aczkolwiek miksów można używać też na swój własny sposób.

## Dodawanie miksów

Miksy można dodawać ręcznie z poziomu edytora. Z **menu edytora** należy wybrać jeden z miksów do dodania.

{{< figure src="popup_menu.jpg" caption="Rys. 1 - Menu edytora." class="docs-img" >}}

## Rodzaje miksów

Są trzy rodzaje miksów, z którymi można eksperymentować:
- Miks ambientowy (*Ambient Mix*) 
- Miks przejścia (*Crossfade Mix*)
- Miks pełzającej grozy (*Creeping Dread Mix*)

{{< figure src="mixes_all.jpg" link="mixes_all.jpg" caption="Rys. 2 - Wszystkie rodzaje miksów." class="docs-img" >}}
 
Każdy z miksów ma pewne cechy wspólne. Są to:
- nazwa miksu (można zmienić z poziomu edytora lub widoku kompozycji)
- przyciski do odtwarzania (widoczne w edytorze i głównej liście odtwarzania)
- głośność, prędkość i pozycja utworu w głośnikach
- możliwość podpięcia efektów dźwiękowych (*Output*)
- zdarzenia *Play, Pause, Resume, Stop*
- przycisk "Add Track" do dodawania utworów (tylko w widoku edytora)

## Miks Ambientowy

Miks ambientowy powstał z myślą o tworzeniu tzw. **pejzarzy dźwiękowych**. Są to zestawy dźwięków, które symulują dane otoczenie. Dla przykładu: aby zasymulować wnętrze karczmy, można użyć dźwięku rozmów klientów, stukania kufli i przytłumionego dźwięku deszczu dochodzącego zza okna. Wszystkie powinny być odgrywane równolegle.

Miks ambientowy pozwala na odtworzenie na raz kilku utworów oraz łatwym zarządzaniem ich poziomami głośności i ustawień zapętlenia.

### Stany (*presets*)

Miks ten umożliwia również zdefiniowanie stanów (*preset*), pomiędzy którymi można przełączać się jednym kliknięciem. Dzięki temu w jednym miksie możemy mieć kilka różnych pejzarzy dźwiękowych - wystarczy każdy z nich ustawić na inny stan i przełączać pomiędzy nimi podczas odgrywania miksu.

Stan zapamiętuje poziom głośności każdego podpiętego utworu, oraz wartości samego miksu (głośność, prędkość, pozycja).

Aby **zmienić nazwę** stanu, należy kliknąć w przycisk ✏️ i wprowadzić nową nazwę.

Aby **zapisać** stan, należy kliknąć w przycisk 💾. 

Aby zmienić czas przejścia pomiędzy stanami, należy ustawić odpowiednią wartość w polu **"Transition duration"** w sekundach.

{{< tip icon="shock" title="Ups!" >}}
Nie zapomnij zapisać stanu po zmianie głośności utworów!
{{< /tip >}}

{{< figure src="mix_ambient_editor.jpg" link="mix_ambient_editor.jpg" caption="Rys. 3 - Ambientowy miks z podpiętymi utworami." class="docs-img" >}}

### Widok odtwarzania

Gdy miks jest odtwarzany, prezentuje się następująco.

{{< figure src="mix_ambient_playing.jpg" link="mix_ambient_playing.jpg" caption="Rys. 4 - Ambientowy miks podczas odtwarzania." class="docs-img" >}}

Z tego widoku mamy dostęp do wszystkich możliwości miksu, poza zmianą podpiętych utworów. To można zrobić jedynie z poziomu edytora.

## Miks Przejścia

Miks przejścia pozwala na płynne przechodzenie pomiędzy utworami, podczas ich odgrywania. Głośność wybranego utworu jest stopniowo zwiększana, a innych wyciszana, dzięki czemu osiągamy efekt płynnego przejścia (*crossfade*) pomiędzy utworami.

{{< figure src="mix_crossfade_editor.jpg" link="mix_crossfade_editor.jpg" caption="Rys. 5 - Miks przejścia z podpiętymi utworami." class="docs-img" >}}

### Czas i przycisk przejścia

Miks posiada parametr **czasu przejścia** (*transition duration*), który określa ile sekund zajmuje płynne przejście pomiędzy utworami.

Każdy podpięty utwór posiada **przycisk przejścia**, który powoduje, że wybrany utwór jest podgłaśniany, a pozostałe wyciszane.

### Widok odtwarzania

Gdy misk jest odtwarzany, prezentuje się następująco:

{{< figure src="mix_crossfade_playing.jpg" link="mix_crossfade_playing.jpg" caption="Rys. 6 - Miks przejścia podczas odtwarzania." class="docs-img" >}}

Z tego widoku mamy dostęp do wszystkich możliwości miksu, poza zmianą podpiętych utworów. To można zrobić jedynie z poziomu edytora.

## Miks Pełzającej Grozy

Miks grozy powstał, aby wesprzeć efekt Pełzającej Grozy (*Creeping Dread*). Polega on na transformacji dobrze znanego utworu w istny koszmar. Dzieje się to poprzez: spowolnienie głównego utworu, oraz równoczesne nałożenie drugiej, niepokojącej ścieżki dźwiękowej.

{{< tip icon="ok" title="Wskazówka" >}}
Ten miks wspiera tylko dwa utwory.
{{< /tip >}}

{{< figure src="mix_dread_editor.jpg" link="mix_dread_editor.jpg" caption="Rys. 7 - Miks pełzającej grozy z podpiętymi utworami." class="docs-img" >}}

### Czas i przyciski przejścia

Miks posiada parametr **czasu przejścia** (*transition duration*), który określa ile sekund zajmuje pełna transformacja utworu.

Aby **rozpocząć transformację**, należy nacisnąć **przycisk "Activate"**. 

Aby **cofnąć transformację**, należy przycisnąć **przycisk "Deactivate"**.

{{< figure src="mix_dread_playing.jpg" link="mix_dread_playing.jpg" caption="Rys. 7 - Miks pełzającej grozy podczas odtwarzania." class="docs-img" >}}

### Widok odtwarzania

Gdy misk jest odtwarzany, prezentuje się następująco:

{{< figure src="mix_dread_playing.jpg" link="mix_dread_playing.jpg" caption="Rys. 8 - Miks pełzającej grozy podczas odtwarzania." class="docs-img" >}}

Z tego widoku mamy dostęp do wszystkich możliwości miksu, poza zmianą podpiętych utworów. To można zrobić jedynie z poziomu edytora.

## Efekty dźwiękowe

Do każdego miksu można podpiąć mikser efektów dźwiękowych. 

Z poziomu edytora, należy utworzyć misker i podpiąć go do wyjścia "Output" miksu. Następnie można dodawać efekty dźwiękowe do miksera.

{{< figure src="effects.jpg" link="effects.jpg" caption="Rys. 9 - Miks z podpiętym mikserem efektów dźwiękowych." class="docs-img" >}}

# Masz pytania?

{{< docs-contact >}}