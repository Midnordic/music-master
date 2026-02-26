---
title: "Slow Motion"
subtitle: "Twórz hiperintensywne momenty poprzez... spowolnienie wszystkiego."
date: 2026-02-18
author: "Manuel"
thumbnail: "en/blog/slowmo/thumbnail.jpg"
---

## Co to jest?

*Slowmo* to transformacja, która zmienia normalny upływ czasu w coś gęstego i nierealnego — jakby świat poruszał się w syropie. Zmienia rytm akcji, rozciągając go tak, że każdy ruch staje się celowy, intensywny i lekko nienaturalny.

## Przykład filmowy

W pierwszej bitwie filmu **300**, slow motion nie jest jedynie sztuczką wizualną — to świadoma strategia dźwiękowa. Gdy Spartanie zderzają się z Persami, miks przechodzi między chaosem w czasie rzeczywistym a rozciągniętymi dźwiękami. Zmiana jest natychmiastowa: muzyka zwalnia, frazy stają się dłuższe, jakby ktoś złapał tempo odgrywania za gardło.

Potem scena wraca do normalnej prędkości — i to właśnie kontrast robi największą robotę. Powrót ostrzejszych transjentów i gęstszej faktury sprawia, że pole bitwy nagle wydaje się zatłoczone i brutalne. Dla Mistrza Gry lekcja jest prosta: używaj Slowmo jako kontrolowanej „kieszeni czasu”. Wchodź w nią przy ciosie, upadku, ocalonym życiu, brutalnym finiszu. Pozwól muzyce się rozciągnąć, a uderzeniom wybrzmieć tak, by stół poczuł wagę chwili. A potem przywróć czas i pozwól, by powrót normalnego tempa był oznaczeniem dalszej walki.

{{< iframe src="https://www.youtube.com/embed/AGrExbRqCX0?start=134" title="300" >}}

## Do czego używać?

Jako Mistrz Gry zaczynasz od normalnego, bezpiecznego rytmu: drużyna ma przewagę w czystej walce, pewny plan, dobrą widoczność, przewidywalnych przeciwników. A potem Slowmo spada na nich jak grom z jasnego nieba. Strzała opuszcza łuk i czas się rozciąga. Kroki zamieniają się w długie, ciężkie dudnienia. Gracze słyszą własny oddech głośniej niż pole bitwy. Każda decyzja staje się momentem pod reflektorem: krok w lewo, uniesienie tarczy, decyzja o ciosie. Walka wciąż trwa, ale scena przestaje być o tym „kto wygra”. Zaczyna być o tym „jakim kosztem”.

Używaj tej techniki do:
- Zamieniania chaotycznej walki w serię zdecydowanych, filmowych mikro-momentów.
- Sygnalizowania trafienia krytycznego, uniknięcia śmierci o włos lub decyzji zmieniającej losy sceny.
- Nadawania przemocy ciężaru poprzez pozwolenie graczom usłyszeć czas między działaniami.

## Zrób to z Music Masterem!

{{< samplepanel sample="Slowmo" >}}

{{< audio preload="false" src="sample.mp3" caption1="Końcowy efekt. Slowmo zaczyna się w 00:25, a powrót następuje w 0:52." >}}

1. Z menu głównego wybierz **„Create Cinematique...”**. Pojawi się okno asystenta technik filmowych.  
1. Wybierz technikę **„Slow Motion”**, klikając przycisk **„Select”**.  
{{< figure src="effect.jpg" caption="Rys. 1 - Efekt Slowmo." class="blog-post-section-img" target="_blank" >}}
1. W kolejnym oknie uzupełnij następujące pola:  
   1. **Backdrop track (required)** – utwór grający w tle przez całą scenę. Zostanie on spowolniony podczas efektu.  
   1. **Speed (percent)** – prędkość odtwarzania podczas slow motion; 1.0 oznacza 100% prędkości, 0.5 oznacza połowę prędkości itd.  
   1. **Transition duration** – czas transformacji w sekundach.  
   1. **Muffle** – zaznacz, jeśli chcesz, aby muzyka i dźwięki zostały dodatkowo wytłumione.  
   1. **Muffle gain (dB)** – o ile zwiększyć głośność efektu; ustaw wyższą wartość, jeśli nie chcesz zbyt mocno obniżać ogólnej głośności.  
   1. **Sfx1 .. Sfx5** – wybierz efekty dźwiękowe, na które również ma zostać nałożony efekt. Opcjonalne.  
1. (Opcjonalnie) Jeśli nie masz odpowiednich utworów, kliknij przycisk **„Use Samples”** i wybierz jeden z dostępnych przykładów. Pola zostaną automatycznie wypełnione utworami dołączonymi do programu.  
1. Kliknij przycisk **„Create”**.  
1. Zostaniesz przeniesiony do widoku kompozycji. Powinien on wyglądać następująco:  
{{< figure src="ready.jpg" link="ready.jpg" caption="Rys. 2 - Efekt w widoku kompozycji." class="blog-post-section-img" target="_blank" >}}
1. Wywołaj zdarzenie **„SlowMo #1 - Play Backdrop”**, naciskając przycisk **„Trigger”**. Utwór tła zacznie grać.  
1. W odpowiednim momencie wywołaj zdarzenie **„SlowMo #1 - Enable”**. Rozpocznie to przejście do slow motion.  
1. Utwór tła oraz wybrane efekty dźwiękowe zostaną spowolnione, a efekt wytłumienia zostanie zastosowany (jeśli zaznaczono).  
1. Baw się dobrze w zwolnionym tempie! Możesz odtwarzać efekty dźwiękowe — również zostaną spowolnione.  
1. Wywołaj zdarzenie **„SlowMo #1 - Disable”**, aby wyłączyć efekt.  
{{< figure src="editor.jpg" link="editor.jpg" caption="Rys. 3 - Efekt w widoku edytora." class="blog-post-section-img" target="_blank" >}}
1. Za pomocą edytora możesz dopasować efekt do własnych potrzeb. Spróbuj poeksperymentować!

## Chcesz wypróbować tę nową sztuczkę?

Wykorzystaj ten i inne efekty filmowe w Music Masterze. Wypróbuj już teraz!