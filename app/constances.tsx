/*
 carouselImages are for the looping images on home page,
 imagesLinks are for the image gallery with link to page for all pages,
 works are for the sidebar menu,
 otherSections are for the sidebar sub menu on the botton of main menu
 images for
*/

export type ImageData = string;

export type ImageData2 = {
  rowSpan: number;
  scale: string;
  src: string;
  alt: string;
  col: string;
};

export const carouselImages = [
  "IMG_6562_bbg_crpoed.jpg",
  "000023.jpg",
  "PXL_20210621_062035140.jpg",
  "IMG_6162a.jpg",
  "Screen-Shot-2020-04-16-at-5.32.35-PM.png",
  "IMG_6207.JPG",
  "drawinga.jpg",
  "IMG_6510.jpg",
  "kites00578.png",
  "IMG_6562_bbg_crpoed.jpg",
  "kites01719.png",
  "IMG_6771.JPG",
  "matrix.png",
  "IMG_7036.JPG",
  "musicscape-81.png",
  "PXL_20210415_172701758.jpg",
];

export const imagesLinks = [
  [
    "書寫身體 風動筆畫",
    "/Writing-Body-Moving-Strokes",
    "82B6A502-4FB6-4811-915D-A4CDAC7587AEa.JPG",
  ],
  ["Seeding Her Feet", "/Seeding-Her-Feet", "PXL_20210910_173418394.jpg"],
  ["Rings 環", "/Rings", "Zi-Xian_Szu-Yi-Wang_GNKK.jpg"],
  [
    "You House 遊居之間",
    "/You-House",
    "Screen-Shot-2022-01-04-at-4.48.43-PM.png",
  ],
  [
    "Zi Yuan, A Spring Stroll 字園遊步",
    "/Zi-Yuan-A-Spring-Stroll",
    "PXL_20210415_161841914.jpg",
  ],
  ["Zi Xian at TENT", "/Zi-Xian-at-TENT", "Zi-Xian_Szu-Yi-Wang_GNKK.jpg"],
  [
    "Foreshore 漫步潮閒",
    "/Foreshore",
    "Screen-Shot-2020-04-16-at-5.32.35-PM.png",
  ],
  ["Shan yu Shu", "/Shan-yu-Shu", "IMG_6752a.jpg"],
  ["Ritual upon the Paper", "/Ritual-upon-the-Paper", "IMG_7032.JPG"],
  [
    "In-between the Post Urban",
    "/Writing-In-between-the-Post-Urban",
    "58604194_10156027972171128_4487323097183027200_o.jpg",
  ],
  [
    "Extension Park Vijversburg",
    "/Extension-Park-Vijversburg",
    "IMG_4594xx.jpg",
  ],
  ["Zi Xian 字閒", "/Zi-Xian-The-Hanzi-Space", "IMG_9328_bbg.jpg"],
  [
    "The Stage After",
    "/The-Stage-After",
    "Screen-Shot-2018-07-31-at-9.50.47-PM.png",
  ],
  [
    "Moving Drawings",
    "/Moving-Drawings",
    "Screen-Shot-2019-01-24-at-1.49.13-AM.png",
  ],
  ["Narrative Theatre", "/Narrative-Theatre", "a2-full-10.jpg"],
  ["Water, Air, Ambience", "/Water-Air-Ambience", "IMG_1247.JPG"],
  ["Narrative Rooms", "/Narrative-Rooms", "veil04718.png"],
  ["Hanzi on the Table", "/Hanzi-on-the-Table", "IMG_1703.jpg"],
  ["The Shining Matter", "/The-Shining-Matter", "IMG_6054aa.jpg"],
  ["Meet the Mountains", "/Meet-the-Mountains", "_MG_7730blue_s.jpg"],
  ["(un)Folded Clusters", "/un-Folded-Clusters", "DSC07413.JPG"],
  ["Visual music", "/Visual-music", "musicscape-81.png"],
];

export const works = [
  ["書寫身體 風動筆畫", "/Writing-Body-Moving-Strokes"],
  ["Seeding Her Feet", "/Seeding-Her-Feet"],
  ["Rings 環", "/Rings"],
  ["You House 遊居之間", "/You-House"],
  ["Zi Yuan, A Spring Stroll 字園遊步", "/Zi-Yuan-A-Spring-Stroll"],
  ["Zi Xian at TENT", "/Zi-Xian-at-TENT"],
  ["Foreshore 漫步潮閒", "/Foreshore"],
  ["Huai House 徊屋", "/Huai-House-Strolling-House"],
  ["Shan yu Shu", "/Shan-yu-Shu"],
  ["Ritual upon the Paper", "/Ritual-upon-the-Paper"],
  ["In-between the Post Urban", "/Writing-In-between-the-Post-Urban"],
  ["Extension Park Vijversburg", "/Extension-Park-Vijversburg"],
  ["Zi Xian 字閒", "/Zi-Xian-The-Hanzi-Space"],
  ["The Stage After", "/The-Stage-After"],
  ["Moving Drawings", "/Moving-Drawings"],
  ["Narrative Theatre", "/Narrative-Theatre"],
  ["Water, Air, Ambience", "/Water-Air-Ambience"],
  ["Narrative Rooms", "/Narrative-Rooms"],
  ["Hanzi on the Table", "/Hanzi-on-the-Table"],
  ["The Shining Matter", "/The-Shining-Matter"],
  ["(un)Folded Clusters", "/un-Folded-Clusters"],
  ["Meet the Mountains", "/Meet-the-Mountains"],
];

export const photoLayouts = [
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr 1fr 1fr 1fr",
];

export const photoImages: ImageData[] = [
  "79320007.JPG",
  "79300013.JPG",
  "79320007.JPG",
  "79320007.JPG",
  "79320007.JPG",
  "79320007.JPG",
  "79320007.JPG",
  "79320007.JPG",
];

export const otherSections = [
  ["Film", "/Film"],
  ["Photo galleries", "/Photo-gallerie"],
  ["Visual music", "/Visual-music"],
  ["News", "/News"],
  ["Information", "/Information"],
  ["cv", "/cv"],
];

export const meetLayouts = [
  "1fr 2fr",
  "2fr 1fr",
  "1fr 2fr",
  "1fr",
  "1fr",
  "1fr 1fr",
  "1fr 2fr",
];

export const meetImages: ImageData[] = [
  "25050014.JPG",
  "25050012.JPG",
  "_MG_7653s.jpg",
  "pinga_b.jpg",
  "IMG_8629_s.jpg",
  "_MG_7777s.jpg",
  "_MG_7730s.jpg",
  "_MG_7854s.jpg",
  "_MG_7858s.jpg",
  "_MG_7913s.jpg",
  "_MG_7884s.jpg",
  "_MG_7964s.jpg",
];

export const unLayouts = [
  "1fr",
  "1fr 1fr",
  "1fr",
  "2fr 1fr",
  "2fr 1fr 3fr",
  "2fr 1fr",
  "1fr",
];

export const unImages: ImageData[] = [
  "DSC07413.JPG",
  "011514.jpg",
  "orga.jpg",
  "IMG_8169.JPG",
  "IMG_8174.JPG",
  "IMG_8173.JPG",
  "Screen-Shot-2014-01-22-at-6.48.35-AM.png.jpg",
  "Screen-Shot-2014-01-22-at-6.48.27-AM.png.jpg",
  "Screen-Shot-2014-01-22-at-6.48.43-AM.png.jpg",
  "IMG_4095.jpg",
  "IMG_2337.JPG",
  "DSC07415.JPG",
];

export const shiningLayouts = [
  "1fr",
  "1fr",
  "1fr",
  "2fr 3fr",
  "3fr 2fr",
  "1fr",
];

export const shiningImages: ImageData[] = [
  "IMG_6054aa.jpg",
  "collage.png",
  "Screen-Shot-2018-10-03-at-4.59.57-PM.png",
  "IMG_6023a.jpg",
  "IMG_5871.JPG",
  "IMG_6019a.jpg",
  "IMG_6100.JPG",
  "Screen-Shot-2018-10-03-at-4.58.37-PM.png",
];

export const hanziLayouts = ["2fr 1fr", "1fr", "1fr", "3fr 2fr", "2fr 3fr"];

export const hanziImages: ImageData[] = [
  "IMG_1703.jpg",
  "IMG_1711t.png",
  "IMG_1706.JPG",
  "IMG_1707.JPG",
  "IMG_1708.JPG",
  "IMG_1739.JPG",
  "IMG_1704good.JPG",
  "IMG_1775.JPG",
];

export const roomLayouts = [
  "1fr",
  "1fr 1fr",
  "1fr",
  "1fr",
  "1fr",
  "2fr 1fr",
  "1fr 2fr",
];

export const roomImages: ImageData[] = [
  "veil04718.png",
  "kites00602.png",
  "kites00418.png",
  "kites01719.png",
  "veil_pink01327.png",
  "veil02104.png",
  "surface05614.png",
  "IMG_5385.JPG",
  "veil03862.png",
  "veil02829.png",
  "15540670_1061438253978924_1375861920733325599_o.jpg",
  "IMG_2910.JPG",
  "received_10154058655346128a.jpg",
  "IMG_5468.JPG",
];

export const waterLayouts = [
  "2fr 1fr",
  "1fr",
  "1fr 2fr",
  "1fr",
  "1fr 1fr",
  "1fr",
  "2fr 3fr",
  "1fr 1fr",
  "3fr 1fr 2fr",
  "1fr",
];

export const waterImages: ImageData[] = [
  "000023.jpg",
  "googleview.png",
  "second22-02.png",
  "site0516_reflectiononly.png",
  "matrix.png",
  "three.jpg",
  "mtjade_s.jpg",
  "galaxy2_s.jpg",
  "shanshui_sa.jpg",
  "DSC01681a.jpg",
  "Szu-Yi10a.jpg",
  "aa-1.jpg",
  "IMG_1247.JPG",
  "10a.jpg",
  "IMG_1161da.jpg",
  "14a.jpg",
  "IMG_1100.JPG",
];

export const narrativeLayouts = [
  "1fr",
  "2fr 1fr",
  "1fr",
  "2fr 1fr 1fr",
  "1fr 1fr",
  "1fr",
];

export const narrativeImages: ImageData[] = [
  "a2-venue-10.jpg",
  "a2mapp-09.png",
  "a2-08.png",
  "a2-full-10.jpg",
  "poster-02.png",
  "poster-03.png",
  "poster-04.png",
  "compass_mid-0629-18.png",
  "compass_mid-0629-14.png",
  "compass_mid-0629-15.png",
];

export const movingLayouts = [
  "1fr",
  "1fr",
  "1fr",
  "1fr",
  "1fr",
  "2fr 1fr",
  "1fr",
];

export const movingImages: ImageData[] = [
  "Screen-Shot-2019-01-24-at-1.49.13-AM.png",
  "IMG_6178.JPG",
  "IMG_6183.JPG",
  "IMG_6184.JPG",
  "IMG_6194.JPG",
  "IMG_6206.JPG",
  "IMG_6202.JPG",
  "IMG_6207.JPG",
];

export const stageLayouts = [
  "1fr 1fr",
  "1fr 1fr",
  "1fr",
  "1fr",
  "4fr 3fr 3fr",
  "1fr 1fr",
  "1fr",
];

export const stageImages: ImageData[] = [
  "stage-after_imgpeople-01.jpg",
  "drawing.jpg",
  "IMG_6162a.jpg",
  "Screen-Shot-2018-07-31-at-9.50.47-PM.png",
  "stage-after_imggroup-01.jpg",
  "thestageafteranaly_all.jpg",
  "IMG_6230.JPG",
  "IMG_6226.JPG",
  "black4.jpg",
  "stage-after_imggroup-04.jpg",
  "stage-after_imggroup-02.jpg",
  "stage-after_imggroup-05.jpg",
];

export const huaiLayouts = [
  "1fr",
  "1fr",
  "1fr",
  "1fr 1fr",
  "1fr 1fr",
  "1fr",
  "1fr",
  "1fr",
  "1fr",
  "1fr",
  "1fr",
  "1fr",
];

export const huaiImages: ImageData[] = [
  "Screen-Shot-2020-03-20-at-11.48.15-AM.png",
  "Screen-Shot-2020-03-20-at-11.47.40-AM.png",
  "Screen-Shot-2020-03-20-at-11.44.27-AM.png",
  "Screen-Shot-2020-03-20-at-11.00.48-AM.png",
  "sketch_plancluster.jpg",
  "Screen-Shot-2020-03-20-at-11.24.32-AM.png",
  "diagram_nrcollage.png",
  "Screen-Shot-2020-03-20-at-10.58.54-AM.png",
  "Screen-Shot-2020-03-20-at-10.58.28-AM.png",
  "Screen-Shot-2020-03-20-at-11.22.58-AM.png",
  "Screen-Shot-2020-03-20-at-11.00.32-AM.png",
  "Screen-Shot-2020-03-20-at-11.00.13-AM.png",
  "Screen-Shot-2020-03-20-at-10.59.59-AM.png",
  "Screen-Shot-2020-03-20-at-11.21.10-AM.png",
  "Screen-Shot-2020-03-20-at-11.21.10-AM.png",
];
export const seedingLayouts = [
  "1fr 1fr",
  "2fr 3fr",
  "3fr 2fr",
  "1fr",
  "1fr",
  "3fr 2fr",
  "1fr",
  "1fr",
];

export const seedingImages: ImageData[] = [
  "PXL_20210910_173418394.jpg",
  "Screenshot_20211106-021331_2.png",
  "PXL_20210910_173659861.jpg",
  "PXL_20210910_175328593.jpg",
  "PXL_20210910_173432366.jpg",
  "A6DF5CE0-5399-494D-BA0A-C3E31A87E3E6.jpg",
  "246439937_10157865498606486_8503072133344096881_n.jpg",
  "FAB0F8F9-BBE3-4634-B418-0D067A893328.jpg",
  "Tent-divers-expo-10sept21.jpeg",
  "242382449_1791722104549286_600044980755895869_n.jpg",
  "246898587_10157865498871486_8487943744716560508_n.jpg",
];

export const ziLayouts = ["3fr 2fr", "2fr 3fr"];

export const ziImages: ImageData[] = [
  "59163455_10156027972031128_1840972735690309632_o.jpg",
  "58745031_10156027972316128_9114538901308964864_o.jpg",
  "58864861_10156027972086128_9180532289287749632_o.jpg",
  "59449239_10156027972261128_1811656409914277888_o.jpg",
];

export const ziLayouts2 = [
  "1fr",
  "1fr 1fr",
  "1fr 1fr",
  "1fr",
  "2fr 3fr",
  "3fr 2fr",
  "1fr",
];

export const ziImages2: ImageData[] = [
  "IMG_9328_bbg.jpg",
  "IMG_1753f.jpg",
  "west_limestone-s-01.jpg",
  "west_limestone-s-03f.jpg",
  "west_limestone-s-02.jpg",
  "corridoor-03_rgb.jpg",
  "IMG_6510.jpg",
  "IMG_6531.jpg",
  "IMG_6562_bbg.jpg",
  "IMG_6508.jpg",
  "IMG_6514.jpg",
];

export const ziLayouts3 = ["3fr 2fr 1fr", "2fr 2fr 1fr"];

export const ziImages3: ImageData[] = [
  "xian_evolution_wb.jpg",
  "IMG_1741a.jpg",
  "IMG_6465f.jpg",
  "IMG_6454.JPG",
  "IMG_6486.jpg",
  "IMG_6412.jpg",
];

export const extLayouts = ["1fr", "2fr 1fr", "1fr", "3fr 1fr", "1fr"];

export const extImages: ImageData[] = [
  "IMG_4594xx.jpg",
  "IMG_4669.jpg",
  "IMG_4556.jpg",
  "IMG_4609.jpg",
  "IMG_4626.jpg",
  "aa.jpg",
  "IMG_4567xx.jpg",
];

export const writingLayouts = ["1fr", "1fr 1fr 1fr", "3fr 1fr", "1fr"];

export const writingImages: ImageData[] = [
  "58604194_10156027972171128_4487323097183027200_o.jpg",
  "59685201_435294860639428_2347775307500486656_n.jpg",
  "60019610_344007699652826_2220385559593877504_n.jpg",
  "59712009_856607704683558_8403111292809773056_n.jpg",
  "59898198_364982087695861_8924056131068755968_n.jpg",
  "60644528_2335865966473230_3756865287459176448_na.jpg",
  "79360015.JPG",
];

export const ritualLayouts = [
  "1fr",
  "2fr 1fr",
  "1fr 1fr",
  "2fr 1fr",
  "1fr 2fr",
];

export const ritualImages: ImageData[] = [
  "IMG_7032.JPG",
  "IMG_7028.JPG",
  "IMG_7036.JPG",
  "IMG_7025.JPG",
  "IMG_7031.JPG",
  "IMG_7030.JPG",
  "IMG_7035.JPG",
  "IMG_7016.JPG",
  "IMG_7019.JPG",
];

export const shanLayouts = ["1fr", "2fr 1fr", "1fr", "1fr", "2fr 1fr", "1fr"];

export const shanImages: ImageData[] = [
  "IMG_6752a.jpg",
  "IMG_6779.JPG",
  "IMG_6784.JPG",
  "IMG_6780.JPG",
  "IMG_6765.JPG",
  "IMG_6757.JPG",
  "IMG_6762.JPG",
  "IMG_6771.JPG",
];

export const foreshoreLayouts = [
  "1fr",
  "1fr",
  "1fr",
  "2fr 1fr",
  "1fr",
  "1fr",
  "1fr",
  "1fr",
];

export const foreshoreImages: ImageData[] = [
  "Screen-Shot-2020-05-14-at-4.59.22-PM.png",
  "Screen-Shot-2020-04-16-at-5.32.35-PM.png",
  "Screen-Shot-2020-04-16-at-5.33.00-PM.png",
  "Screen-Shot-2020-05-14-at-4.58.43-PM.png",
  "Screen-Shot-2020-05-14-at-4.56.37-PM.png",
  "IMG_4956.JPG",
  "Screen-Shot-2020-04-23-at-5.39.44-PM.png",
  "IMG_5007.JPG",
  "IMG_4820.JPG",
];

export const ringsLayouts = ["1fr", "1fr", "1fr", "1fr", "1fr"];

export const ringsImages: ImageData[] = [
  "Zi-Xian_Szu-Yi-Wang_GNKK.jpg",
  "Screen-Shot-2021-01-23-at-1.56.50-PM.png",
  "Screen-Shot-2021-01-23-at-3.01.12-PM.png",
  "Screen-Shot-2021-01-23-at-2.09.18-PM.png",
  "Screen-Shot-2021-01-23-at-2.11.53-PM.png",
];

export const ZiLayouts = ["1fr"];

export const ZiImages: ImageData[] = [
  "Screen-Shot-2021-07-21-at-12.58.04-AM.png",
];

export const ZiLayouts2 = ["2fr 3fr", "1fr 1fr", "1fr 1fr", "2fr 1fr"];

export const ZiImages2: ImageData[] = [
  "PXL_20210417_124644582.jpg",
  "PXL_20210415_172701758.jpg",
  "PXL_20210415_1548419482.jpg",
  "PXL_20210415_161843617.jpg",
  "PXL_20210415_173822678.jpg",
  "PXL_20210415_154959999.jpg",
  "PXL_20210415_173227186.jpg",
  "PXL_20210415_161841914.jpg",
];

export const writingBodyLayouts = ["1fr", "1fr", "1fr 1fr"];

export const writingBodyImages: ImageData[] = [
  "IMG_6227-copy.jpeg",
  "IMG_6227.jpg",
  "Screenshot-2025-12-30-at-16.55.40.png",
  "Screenshot-2025-12-30-at-16.56.25.png",
];

export const writingBodyLayouts2 = [
  "2fr 3fr",
  "3fr 2fr",
  "1fr",
  "3fr 2fr",
  "1fr",
  "1fr",
];

export const writingBodyImages2: ImageData[] = [
  "IMG_3835.jpg",
  "IMG_2645-a.jpeg",
  "IMG_2648.jpg",
  "OriginalPhoto-785004629.697094.jpg",
  "OriginalPhoto-785004606.90686.jpg",
  "OriginalPhoto-785004579.609438.jpg",
  "OriginalPhoto-785005103.119686.jpg",
  "82B6A502-4FB6-4811-915D-A4CDAC7587AEa.JPG",
  "IMG_2739.jpg",
];

export const youHouseLayouts = [
  "1fr",
  "3fr 2fr",
  "1fr",
  "1fr",
  "1fr 1fr",
  "1fr 1fr",
  "1fr 1fr 1fr",
  "1fr",
  "1fr 1fr",
  "1fr 1fr 1fr 1fr",
  "1fr",
  "1fr",
];

export const youHouseImages: ImageData[] = [
  "Screen-Shot-2022-01-04-at-4.52.16-PM.png",
  "Screen-Shot-2022-01-04-at-4.48.43-PM.png",
  "Screen-Shot-2022-02-11-at-3.58.17-PM.png",
  "Screen-Shot-2022-02-11-at-3.58.29-PM.png",
  "Screen-Shot-2022-02-11-at-3.58.44-PM.png",
  "Screen-Shot-2022-01-04-at-4.54.25-PM.png",
  "Screen-Shot-2022-01-04-at-4.54.17-PM.png",
  "Screen-Shot-2022-02-11-at-3.58.58-PM.png",
  "Screen-Shot-2022-02-11-at-3.59.06-PM.png",
  "Screen-Shot-2022-02-11-at-3.59.21-PM.png",
  "Screen-Shot-2022-02-11-at-3.59.27-PM.png",
  "Screen-Shot-2022-02-11-at-3.59.36-PM.png",
  "Screen-Shot-2022-02-11-at-4.16.30-PM.png",
  "exterior-02-02.jpg",
  "inerior-02-03.jpg",
  "Screen-Shot-2022-02-11-at-4.15.12-PM.png",
  "Screen-Shot-2022-02-11-at-4.15.20-PM.png",
  "Screen-Shot-2022-02-11-at-4.15.29-PM.png",
  "Screen-Shot-2022-02-11-at-4.15.40-PM.png",
  "Screen-Shot-2022-02-11-at-4.19.33-PM.png",
  "Screen-Shot-2022-02-11-at-4.16.04-PM.png",
];
