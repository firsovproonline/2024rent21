/*
--
-- Структура таблицы `im_object`
--

CREATE TABLE IF NOT EXISTS `im_object?:(
  `ID?:int(11) unsigned NOT NULL AUTO_INCREMENT,
  `GOROD?: string;
  `METRO?: string;
  `RAJON?: string;
  `ULITCA?: string;
  `PL1?: string;
  `TIPP?: string;
  `TIP?: string;
  `OPP?: string;
  `TEL?: string;
  `UID?:varchar(64) NOT NULL DEFAULT '',
  `DATAP?:datetime DEFAULT NULL,
  `CENA?: string;
  `TIPC?: string;
  `IST?: string;
  `VAL?: string;
  `DOM?:text NOT NULL,
  `DOM1?:varchar(10) NOT NULL DEFAULT '',
  `DOM2?:varchar(10) NOT NULL DEFAULT '',
  `DATA?:date NOT NULL DEFAULT '0000-00-00',
  `KL_ID?:int(9) NOT NULL DEFAULT '0',
  `REM?:text NOT NULL,
  `FIO?:varchar(35) NOT NULL DEFAULT '',
  `UD?:int(3) NOT NULL DEFAULT '0',
  `UTIP?: string;
  `TIPM?:varchar(15) NOT NULL DEFAULT '',
  `DATAPUB?:date DEFAULT NULL,
  `OB_GLID?:varchar(33) DEFAULT NULL,
  `_FLAGS?:int(11) DEFAULT NULL,
  `ETAGALL?: string;
  `TIPZD?: string;
  `KLASS?: string;
  `INFO?:blob,
  `BOOL_?: string;
  `O_DATAP?:date DEFAULT NULL,
  `O_PROVTEL?: string;
  `SOSTF?: string;
  `PARK?: string;
  `GODPOST?:varchar(4) DEFAULT NULL,
  `GODREK?:varchar(4) DEFAULT NULL,
  `OHR?: string;
  `INFR?: string;
  `EDIZM?: string;
  `KOMMKL?: number;
  `KOMMA?: number;
  `KVG?: string;
  `KVM?: string;
  `KVS?: string;
  `CENA_AR?: number;
  `CENA_PR?: number;
  `CENA_AR_M2_DAY?: number;
  `CENA_PR_M2?: number;
  `ETAG?: string;
  `VHOD?: string;
  `BOOL?: string
  `KOLKOM?: number;
  `PLKOM?: string;
  `SOST?: string;
  `SOSK?: string;
  `TEL1?: string;
  `TEL1PR?: string;
  `TEL2?: string;
  `TEL2PR?: string;
  `HPOTLKA?: string;
  `OKNA?: string;
  `POL?: string;
  `SU?: string;
  `PLATEG?: string;
  `STRAH?: string;
  `TIPD?: string;
  `AG?:int(1) DEFAULT NULL,
  `NOAG?:int(1) DEFAULT NULL,
  `EX?:int(1) DEFAULT NULL,
  `AROADS?: string;
  `HEATING?: string;
  `OPERATOR?: string;
  `CONTACT?: string;
  `PRM?: string;
  `SPEC?: string;
  `DOPINFO?: string;
  `DOPPL?: string;
  `HAS_PHOTO?: string;
  `HAS_PPP?:int(1) NOT NULL DEFAULT '0',
  `BEG_BASE_PUBL?:date NOT NULL DEFAULT '0000-00-00',
  `END_BASE_PUBL?:date NOT NULL DEFAULT '0000-00-00',
  `BEG_SITE_PUBL?:date NOT NULL DEFAULT '0000-00-00',
  `END_SITE_PUBL?:date NOT NULL DEFAULT '0000-00-00',
  `ALLOW_BASE_PUBL?: string;
  `ALLOW_SITE_PUBL?: string;
  `URL_LINK?: string;
  `PROID?: string;
  `EMAIL?: string;
  `TITLE?: string;
  `PLIN?: number;
  `PLOUT?: number;
  `MAP?: string;
  `KATALOG?: string;
  `TITLEHEADER?:text NOT NULL,
  `POSITION?: string;
  `FIRSTPHOTO?: string;
  `KLINFO?:text NOT NULL,
  `CODE?:varchar(82) DEFAULT NULL,
  `OCATD?:varchar(119) DEFAULT NULL,
  `INDEX?:varchar(40) DEFAULT NULL,
  `NALOGOVA?:varchar(16) DEFAULT NULL,
  `OKRUG?: string;
  `TITLESELECT?: string;
  `YOUTUBE?:text NOT NULL,
  `PANORAM360?:text NOT NULL,
  `IMPORT?:varchar(128) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  UNIQUE KEY `UID?:(`UID`),
  KEY `TIP?:(`TIP`(25)),
  KEY `OPP?:(`OPP`(25)),
  KEY `TEL?:(`TEL`(50))
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=13248 ;

*/
interface IIm_object {
    ID?: number;
    GOROD?: string;
    METRO?: string;
    RAJON?: string;
    ULITCA?: string;
    PL1?: string;
    TIPP?: string;
    TIP?: string;
    OPP?: string;
    TEL?: string;
    UID?: string;
    DATAP?: string;
    CENA?: string;
    TIPC?: string;
    IST?: string;
    VAL?: string;
    DOM?: string;
    DOM1?: string;
    DOM2?: string;
    DATA?: string;
    KL_ID?: number;
    REM?: string;
    FIO?: string;
    UD?: number;
    UTIP?: string;
    TIPM?: string;
    DATAPUB?: string;
    OB_GLID?: string; 
    _FLAGS?: number;
    ETAGALL?: string;
    TIPZD?: string;
    KLASS?: string;
    INFO?: string;
    BOOL_?: string;
    O_DATAP?: string;
    O_PROVTEL?: string;
    SOSTF?: string;
    PARK?: string;
    GODPOST?: string;
    GODREK?: string;
    OHR?: string;
    INFR?: string;
    EDIZM?: string;
    KOMMKL?: number;
    KOMMA?: number;
    KVG?: string;
    KVM?: string;
    KVS?: string;
    CENA_AR?: number;
    CENA_PR?: number;
    CENA_AR_M2_DAY?: number;
    CENA_PR_M2?: number;
    ETAG?: string;
    VHOD?: string;
    BOOL?: string
    KOLKOM?: number;
    PLKOM?: string;
    SOST?: string;
    SOSK?: string;
    TEL1?: string;
    TEL1PR?: string;
    TEL2?: string;
    TEL2PR?: string;
    HPOTLKA?: string;
    OKNA?: string;
    POL?: string;
    SU?: string;
    PLATEG?: string;
    STRAH?: string;
    TIPD?: string;
    AG?: number;
    NOAG?: number;
    EX?: number;
    AROADS?: string;
    HEATING?: string;
    OPERATOR?: string;
    CONTACT?: string;
    PRM?: string;
    SPEC?: string;
    DOPINFO?: string;
    DOPPL?: string;
    HAS_PHOTO?: string;
    HAS_PPP?: number;
    BEG_BASE_PUBL?: string;
    END_BASE_PUBL?: string;
    BEG_SITE_PUBL?: string;
    END_SITE_PUBL?: string;
    ALLOW_BASE_PUBL?: string;
    ALLOW_SITE_PUBL?: string;
    URL_LINK?: string;
    PROID?: string;
    EMAIL?: string;
    TITLE?: string;
    PLIN?: number;
    PLOUT?: number;
    MAP?: string;
    KATALOG?: string;
    TITLEHEADER?: string;
    POSITION?: string;
    FIRSTPHOTO?: string;
    KLINFO?: string;
    CODE?: string;
    OCATD?: string;
    INDEX?: string;
    NALOGOVA?: string;
    OKRUG?: string;
    TITLESELECT?: string;
    YOUTUBE?: string;
    PANORAM360?: string;
    IMPORT?: string;
}

export default IIm_object;
