import React from "react";
import Results from "./Results";

interface Ticket {
  datum_zacatku: string;
  doba_trvani: number;
  id: number;
  id_letadla: number;
  id_spolecnosti: number;
  kod_letiste_konec: string;
  kod_letiste_start: string;
  let_cas: string;
  let_datum: string;
  nazev: string;
  start_letiste: any;
  end_letiste: any;
}

interface TicketInfo {
  ticketInfo: Ticket[];
}

const ResultsMap: React.FC<TicketInfo> = ({ ticketInfo }) => {
  return (
    <div className="text-white max-w-7xl text-xl">
      {ticketInfo.map((ticket, index) => (
        <div key={index} className="ticket">
          <Results
            flightName={ticket.nazev}
            date={ticket.let_datum}
            airportFrom={ticket.start_letiste.nazev}
            airportTo={ticket.start_letiste.nazev}
          />
        </div>
      ))}
      <h1>Hedvábná stezka / Čínská zeď</h1>
      <p>
        Jsou vyznačeny tři různé úseky v lese. Před touto křižovatkou má každý
        tým své stanoviště. V každém úseku dlouhém asi 40 metrů se bude nacházet
        kruh s různými barvami hedvábí (každý má na konci jinou hodnotu). Cílem
        hry je dosáhnout co největší hodnoty z nasbíraných hedvábí. V každém
        úseku budou 1-2 vedoucí. Aby se hráči mohli dostat ke kruhu s hedvábím,
        je důležité, aby nebyli hlasití a museli se proplížit kolem vedoucího.
        To platí i pro cestu zpátky. Ve vyznačených úsecích se nesmí vůbec
        mluvit. Pokud vedoucí usoudí, že je hráč příliš hlasitý nebo promluví,
        udělá zvuk a řekne jeho jméno. Pokud má hráč hedvábí, vedoucí mu ho
        sebere a zároveň mu odebere pas, který dostane každý na začátku. Výdejna
        pasů bude v táboře (předpokládám, že to bude asi 50-100 metrů od
        tábořiště) a bez pasu nemůže být hráč vpuštěn do lesa (do úseku) a musí
        si pro něj zpátky zajít.
        <p className="mt-5">
          Pomůcky: Kartičky s různými typy hedvábí (uděláme podle barev, zlaté,
          bílé, zelené apod.) Tabulka hodnot hedvábí Kartičky s pasem (potřeba
          hodně, aspoň 120 s tím, že by bylo fajn, kdyby se recyklovaly) Fáborky
          na označení trasy
        </p>
      </p>{" "}
      <p className="mt-10 pb-40">
        <h1> Tichá hodina </h1> Každý tým dostane papíry a fixu a zvolí si
        jednoho hlavního zapisovatele, který bude mimo tým. Zbytek týmu má
        zakázáno se sebou komunikovat. Bude vytisknuto celkem asi 30-50? ruzných
        kartiček a to od zvířát, čínských památek, jídel pořakadlech apod. Dětem
        bude pouze řečeno, že si mají zvolit zapisovatele, kterému budou muset
        popsat co se v lese nachází a že 2 lidi maxímálně mohou být v lese.
        Další komunikace mimo tým bude zakázana jak v lese (budou hlídat), před
        kdykoliv. Jakýkoliv zvukový projev bude stržený bod. Cílem hry je co
        nejlépe popsat vše co bylo na těch 30-50 kartách, (jsou co nejvíce
        skryté, musí být přesní nestačí jídlo, zvíře apod). To, že si někdo
        zapamatuje třeba 2-3 kartičky není problém a je to způsob strategie.
        Výsledek teda bude vypadat nějak takto. 1. Velká čínská zeď 2. Žralok 3.
        Kung Pao 4. Taoiští bojovníci 5. Omyly moudrého člověka se podobají
        zatmění slunce. Když se mýlí, všichni to vidí, a vidí také, jak se
        napravuje. (pořekadlo, je potřeba celé, tolerance jedno slovo špatně)
        ... ... Takže shrnutí: Jeden zapisovatel, max 2 lidi v lese, jeden
        přiběhne zpátky do tábora může jít druhý, ten co doběhl čeká u
        zapisovatele něž doběhne celý jeho tým z lesa, vrací se celý tým na
        svoje původní místo a jdou od znova. Vyhrává nejvíc přepsaných kartiček
        správně. Hra končí časovým limitem. Délka hry bude ovlivněna podle toho
        kolik času nám bude zbývat. (předpokládám tak 30-40 min) Pomucky: Pouze
        30-50 kartiček, přípravím
      </p>
    </div>
  );
};

export default ResultsMap;
