---
title: "Broadcast"
icon: "📡"
description: "Przesyłaj dźwięk z Music Mastera bezpośrednio do przeglądarek słuchaczy."
weight: 0
---

## Czym jest Broadcast?

**Broadcast** przesyła dźwięk z Music Mastera bezpośrednio do graczy. Słuchacze potrzebują jedynie przeglądarki internetowej — nie muszą instalować Music Mastera.

Music Master tworzy tymczasowy pokój z linkiem i czterocyfrowym kodem PIN. Udostępnij słuchaczom obie wartości, aby mogli słuchać dźwięku z sesji.

{{< tip icon="shock" title="Ups!" >}}
Ta funkcja jest dostępna tylko w pełnej wersji Music Mastera dla systemu Windows. Nie jest dostępna na Androidzie ani w wersji demonstracyjnej.
{{< /tip >}}

## Rozpoczynanie transmisji

1. Uruchom Music Mastera i otwórz lub utwórz projekt.
1. W Menu Głównym wybierz **Integrations -> Broadcast**.

{{< figure src="main_menu_broadcast.webp" caption="Pozycja Broadcast w menu Integrations." class="docs-img" >}}

1. Otworzy się okno Broadcast. Naciśnij **Start**.
1. Przy pierwszym uruchomieniu hosta Broadcast system Windows może wyświetlić okno zapory sieciowej dla programu **MusicMaster.Plugins.Broadcast**. Wybierz **Zezwalaj na dostęp**, aby host mógł łączyć się ze słuchaczami przez internet.
1. Poczekaj, aż stan zmieni się na **Ready**. Music Master wyświetli link do pokoju i czterocyfrowy kod PIN.
1. Użyj przycisków kopiowania obok linku i kodu PIN, a następnie wyślij obie wartości słuchaczom.

{{< figure src="broadcast_popup.webp" caption="Okno Broadcast z linkiem do pokoju i kodem PIN." class="docs-img" >}}

Podczas sesji Music Master i okno Broadcast muszą pozostać uruchomione. Okno pokazuje bieżący stan i liczbę podłączonych słuchaczy.

{{< tip icon="question" title="Uważaj!" >}}
Jeżeli odmówisz dostępu lub zamkniesz okno uprawnień Windows, słuchacze mogą nie być w stanie się połączyć. Zezwól programowi **MusicMaster.Plugins.Broadcast** na komunikację przez Zaporę systemu Windows. Ustawienie można później zmienić w **Zabezpieczenia Windows -> Zapora i ochrona sieci -> Zezwalaj aplikacji na dostęp przez zaporę**.
{{< /tip >}}

## Dołączanie jako słuchacz

Każdy słuchacz powinien:

1. Otworzyć udostępniony link do pokoju w przeglądarce.
1. Wprowadzić czterocyfrowy kod PIN.
1. Nacisnąć **Join Audio**.
1. Poczekać, aż przeglądarka nawiąże połączenie i zacznie odtwarzać transmisję.

{{< figure src="broadcast_room.webp" caption="Strona pokoju w przeglądarce." class="docs-img" >}}

Jeżeli przeglądarka blokuje automatyczne odtwarzanie dźwięku, słuchacz może być zmuszony do interakcji ze stroną lub zezwolenia karcie przeglądarki na odtwarzanie audio.

## Głośność i wyciszenie

Suwak głośności w oknie Broadcast zmienia poziom dźwięku wysyłanego słuchaczom. Ustawienie wpływa wyłącznie na transmisję i nie zmienia głównej głośności Music Mastera.

Włącz **Mute broadcast**, aby tymczasowo wyciszyć transmisję bez zamykania pokoju.

## Kończenie transmisji

Naciśnij **Stop & Close** lub zamknij okno Broadcast. Music Master rozłączy wszystkich słuchaczy i zamknie tymczasowy pokój. Starego linku i kodu PIN nie można użyć ponownie; rozpoczęcie kolejnej transmisji tworzy nowy pokój.

## Broadcast i Discord

Transmisje Broadcast i Discord nie mogą działać jednocześnie, ponieważ obie integracje korzystają z końcowego strumienia audio Music Mastera. Zatrzymaj aktywną integrację przed uruchomieniem drugiej.

## Prywatność i ograniczenia połączenia

- Dźwięk jest przesyłany bezpośrednio z komputera prowadzącego do każdego słuchacza przez WebRTC. Usługa Music Master koordynuje połączenie, ale nie przekazuje ani nie zapisuje dźwięku.
- Każda osoba posiadająca link do pokoju i kod PIN może słuchać transmisji, dopóki pokój jest aktywny. Udostępniaj je wyłącznie właściwym graczom.
- Pokój obsługuje maksymalnie sześciu słuchaczy jednocześnie.
- Pokoje są tymczasowe i zostają zamknięte po rozłączeniu prowadzącego.

## Rozwiązywanie problemów

### Słuchacz nie może się połączyć

- Sprawdź, czy link i kod PIN zostały skopiowane poprawnie.
- Upewnij się, że okno Broadcast nadal pokazuje stan **Ready** lub **Broadcasting**.
- Poproś słuchacza o użycie najnowszej wersji przeglądarki i ponowne wczytanie strony pokoju.
- Sprawdź ograniczenia zapory sieciowej, VPN-u i sieci po obu stronach.

Broadcast korzysta z bezpośredniego połączenia WebRTC. Niektóre restrykcyjne sieci firmowe, szkolne, komórkowe lub VPN blokują taki ruch. W takich sieciach nawiązanie połączenia może być niemożliwe. Zmiana sieci często rozwiązuje problem.

### Słuchacz jest połączony, ale nie słyszy dźwięku

- Upewnij się, że opcja **Mute broadcast** jest wyłączona, a głośność transmisji jest większa od zera.
- Odtwórz utwór w Music Masterze i sprawdź, czy słychać go lokalnie.
- Poproś słuchacza o zezwolenie na odtwarzanie audio w przeglądarce oraz sprawdzenie głośności karty i urządzenia.

### Pokój został niespodziewanie zamknięty

Music Master musi pozostać uruchomiony i połączony z internetem. Zamknięcie okna Broadcast, wyłączenie Music Mastera lub utrata połączenia przez prowadzącego zamyka pokój.

# Masz pytania?

{{< docs-contact >}}
