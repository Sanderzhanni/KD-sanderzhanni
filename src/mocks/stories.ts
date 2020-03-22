export interface StoryProps{
  title: string;
  text: string;
}

const story1: StoryProps = {
  title: "LHV loob roheliselt investeeriva hübriidpensionifondi",
  text: "LHV toob pensioniturule rohelisi ja jätkusuutlikke investeerimispõhimõtteid järgiva pensionifondi. Uus pensionifond kannab nime LHV Pensionifond Roheline ning selle investeerimisportfell hakkab koosnema sotsiaalselt vastutustundlikest, jätkusuutlikest ja keskkonnaalastest investeeringutest. Fondiga võetav aktsiarisk jääb sõltuvalt fondijuhi nägemusest alati 75% ja 100% vahele."
};

const story2: StoryProps = {
  title: "Eriolukorra ajal töötavad kõik LHV pangateenused",
  text: "Koroonaviiruse leviku tõttu on Eestis kehtestatud eriolukord. Elutähtsa teenuse pakkujana jätkame LHV-s tööd ja anname endast parima, et saaksid pangateenuseid ka praegusel ajal mugavalt kasutada. LHV kliendina saad pea kõiki pangatoiminguid teha kodust lahkumata mobiiliäpi või internetipanga kaudu."
};

export const stories = [
  story1,
  story2
];

