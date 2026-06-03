---
title: "Discord"
icon: "📢"
description: "Integracja z aplikacją Discord."
weight: 0
---

## Czym jest Discord?

**Discord** to platforma do komunikacji głosowej, tekstowej i wideo, zorganizowana wokół serwerów i kanałów. Użytkownicy mogą tworzyć społeczności, rozmawiać na czacie, prowadzić rozmowy głosowe, udostępniać ekran oraz korzystać z botów i integracji.

Więcej informacji: https://discord.com/

Music Master może zintegrować się z Discordem poprzez bota, który służy do **streamowania audio na kanał głosowy** (np. podczas grania online).

## Instalacja i używanie bota bota

Należy przejść przez następujące kroki:
1. Zainstalować aplikację Discord (https://discord.com/download).
1. Zainstalować i aktywować aplikację Music Master [(instalacja i aktywacja)](../docs/installation).
1. Uruchomić aplikację Music Master i Discord.
1. W Menu Głównym wybrać **Integrations -> Discord**.
{{< figure src="main_menu_discord.webp" caption="Pozycja w menu głównym." class="docs-img" >}}
1. Pojawi się okno z opcjami bota.
{{< figure src="discord_popup.webp" caption="Okno z opcjami bota." class="docs-img" >}}
1. Następnie należy **zaprosić bota** na swój serwer, używając przycisku "Invite". Otworzy się okno przeglądarki, gdzie będziemy mogli wybrać serwer, do którego chcemy zaprosić bota. Po zaproszeniu, bot powinien pojawić się na serwerze.
1. Kolejnym krokiem jest połączenie bota z naszym użytkownikiem. Należy nacisnąć przycisk "Link" 🔗, który otworzy okno przeglądarki gdzie będziemy mogli się zalogować do naszego konta na Discordzie. Aplikacja przechowuje tylko nazwę użytkownika i jego identyfikator.
1. Aby połączyć bota z kanałem głosowym, należy:
	1. Wejść na ten kanał głosowy z poziomu Discorda.
	1. Nacisnąć przycisk wejścia do kanału ➜] z poziomu Music Mastera.
	1. Po chwili bot powinien pojawić się na tym samym kanale.
1. Od tego momentu całe audio odgrywane w aplikacji Music Master będzie słyszalne na kanale głosowym na Discordzie dla wszystkich jego podłączonych użytkowników.

## Uprawnienia do streamowania

Administrator serwera powinien ustawić **wymaganą rolę do streamowania**. Jeśli rola zostanie ustawiona, tylko użytkownicy posiadający tę rolę będą mogli połączyć się z botem i przesyłać audio na kanał głosowy.
1. Połącz aplikację z botem (patrz wyżej).
1. Z poziomu czatu Discorda wpisz komendę "/setup role".
1. Wybierz rolę, która umożliwi korzystanie z bota i przesyłanie audio.

{{< tip icon="shock" title="Uwaga!" >}}
Jeśli rola nie zostanie przypisana, każdy użytkownik posiadający Music Mastera będzie mógł używać bota na danym serwerze.
{{< /tip >}}

# Masz Pytania?

{{< docs-contact >}}