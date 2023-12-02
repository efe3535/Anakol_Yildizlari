import React, { useEffect, useCallback, useMemo, useRef, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import { Star } from 'phosphor-react-native';
import Text from './components/customText';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [yildizRengi, setYildizRengi] = useState("wheat");
  const [inputText,setInputText] = useState("")
  const [tur, setTur] = useState("")
  const [bilgi,setBilgi] = useState("")
  const [ornekYildiz, setOrnekYildiz] = useState("");
  const bottomSheetRef = useRef(null);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);
  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  const handleYazi = (text) => {
    let sayi = parseInt(text)
    setInputText(text);
    console.log("sayi",sayi < 50000 && sayi >= 30000);
    if (sayi < 50000 && sayi >= 30000) {
      setYildizRengi("#4289fc");
      setTur("O");
      setBilgi("Bu yıldız türü, çok sıcak ve çok aydınlıktır, çoğunun saçtığı ışık mor ötesi bölgededir. Bu tip; yıldız türleri içerisinde en nadir bulunan sınıftır, yaklaşık olarak 3 milyon yıldızdan biri O sınıfıdır. Çok ağır olmalarından dolayı, O tayf türü yıldızların çekirdeği çok sıcaktır, bu hidrojenlerinin çabuk yanmasına neden olur ve ana dizini ilk olarak terk eden yıldızlar olurlar. O sınıfı yıldızların çevresinde fotobuharlaşma etkisi nedeniyle  diğer yıldızların çevresindeki gibi gezegen formasyonları oluşmaz.");
      setOrnekYildiz("S Monocerotis");
    } else if (sayi < 30000 && sayi >= 10000) {
      setYildizRengi("#aabfff");
      setTur("B")
      setBilgi("Bu tür yıldızlar çok güçlü oldukları için yalnızca kısa bir süre yaşar ve bu nedenle oluştukları bölgeden uzaklaşmazlar. Güneş çevresindeki 800 ana yıldızın yaklaşık 1'i B Sınıfı yıldızlardır.");
      setOrnekYildiz("Alnilam");
    } else if (sayi < 10000 && sayi >= 7500) {
      setYildizRengi("#cad7ff");
      setTur("A")
      setBilgi("Bu tür yıldızlar, genellikle gökyüzünde çıplak göz ile görülebilecek kadar ışıma yaparlar .Güneş'e komşu ana sıra yıldızlarından 160 tanesinden ortalama sadece 1'i A sınıfı yıldız içerir.");
      setOrnekYildiz("Vega");
    } else if (sayi < 7500 && sayi >= 5900) {
      setYildizRengi("#fbf8ff");
      setTur("F")
      setBilgi("Bu yıldız türü, tayfları zayıf hidrojen hatları ve iyonize metaller ile tanımlandırılır. Renkleri beyazdır ve görünür ışıkta saf bir beyaz renk ışıması yaparlar. Güneş'e komşu ana dizi yıldızlardan yaklaşık 33'te 1'i F sınıfı yıldız içerir.");
      setOrnekYildiz("Alfa Leporis");
    } else if (sayi < 5900 && sayi >= 5200) {
      setYildizRengi("#fef4e8");
      setTur("G")
      setBilgi("G sınıfı yıldızları tanımlarsak, muhtemelen güneşimizin bu sınıftan olması sebebiyle, en iyi bilinen yıldız sınıfıdır. Görünür ışıkta genellikle beyaz veya sarımsı beyaz ışınım yaparlar. Güneş'e komşu ana dizi yıldızlarından 13'te 1'i G sınıfı yıldız barındır. Güneş'e komşu 8 ana dizin yıldızdan yaklaşık 1'i K sınıfı yıldız içerir.");
      setOrnekYildiz("Güneş");
    } else if (sayi < 5200 && sayi >= 3900) {
      setYildizRengi("#feddb4");
      setTur("K")
      setBilgi("K sınıfı yıldızlar, güneşimizden biraz daha yüzey sıcaklığı düşük olan turuncumsu yıldızlardır. K sınıfı yıldızlara örnek verilirse en yakın komşumuz Alfa Centauri B bir K sınıfı yıldız tipidir.");

      setOrnekYildiz("Pollux");
    } else if (sayi < 3900 && sayi >= 2500) {
      setYildizRengi("#ffbd71");
      setTur("M")
      setBilgi("M sınıfı, en yaygın yıldız sınıfıdır. Güneş'e komşu ana dizin yıldızlarının 1.32'sinde 1'i M yıldızıdır. Güneş'i çevreleyen yıldızlararası boşlukta ana dizin yıldızlarının yaklaşık yüzde 76'sı M sınıfına ait kırmızı cüce yıldızlardır.");

      setOrnekYildiz("Betelgeuse");
    }  else {
      setYildizRengi("wheat")
      setTur("")
      setBilgi("")
      setOrnekYildiz("")
    }
    /* 
    if (50000>t>=30000):
  print("Yıldızınız 'Koyu Mavi' renktedir." )
  print("Yıldızınız O Tayf Türüne aittir. O sınıfı yıldızlar çok sıcak ve çok aydınlıktır, çoğunun saçtığı ışık mor ötesi bölgededir. Bu tip; yıldız türleri içerisinde en nadir bulunan sınıftır, yaklaşık olarak 3 milyon yıldızdan biri O sınıfıdır. Çok ağır olmalarından dolayı, O tayf türü yıldızların çekirdeği çok sıcaktır, bu hidrojenlerinin çabuk yanmasına neden olur ve ana dizini ilk olarak terk eden yıldızlar olurlar. O sınıfı yıldızların çevresinde fotobuharlaşma etkisi nedeniyle  diğer yıldızların çevresindeki gibi gezegen formasyonları oluşmaz. ")
  
elif (30000>t>=10000):
  print("Yıldızınız 'Mavi' renktedir." )
  print("Yıldızınız B Tayf Türüne aittir. B tayf türündeki yıldızlar çok güçlü oldukları için yalnızca kısa bir süre yaşar ve bu nedenle oluştukları bölgeden uzaklaşmazlar. Güneş çevresindeki 800 ana yıldızın yaklaşık 1'i B Sınıfı yıldızlardır.")

elif(10000>t>=7500):
  print("Yıldızınız 'Mavi-Beyaz' renktedir." )
  print("Yıldızınız A Tayf Türüne aittir. A sınıfı yıldızlar, genellikle gökyüzünde çıplak göz ile görülebilecek kadar ışıma yaparlar.Güneş'e komşu ana sıra yıldızlarından 160 tanesinden ortalama sadece 1'i A sınıfı yıldız içerir.")

elif(7500>t>=5900):
  print("Yıldızınız 'Beyaz' renktedir." )
  print("Yıldızınız F Tayf Türüne aittir. Tayfları zayıf hidrojen hatları ve iyonize metaller ile tanımlandırılır. Renkleri beyazdır ve görünür ışıkta saf bir beyaz renk ışıması yaparlar. Güneş'e komşu ana dizi yıldızlardan yaklaşık 33'te 1'i F sınıfı yıldız içerir.")

elif(5900>t>=5200):
  print("Yıldızınız 'Sarı-Beyaz' renktedir." )
  print("Yıldızınız G Tayf Türüne aittir. G sınıfı yıldızları tanımlarsak, muhtemelen güneşimizin bu sınıftan olması sebebiyle, en iyi bilinen yıldız sınıfıdır. Görünür ışıkta genellikle beyaz veya sarımsı beyaz ışınım yaparlar. Güneş'e komşu ana dizi yıldızlarından 13'te 1'i G sınıfı yıldız barındır. Güneş'e komşu 8 ana dizin yıldızdan yaklaşık 1'i K sınıfı yıldız içerir.")

elif(5200>t>=3900):
  print("Yıldızınız 'Sarı-Turuncu' renktedir." )
  print("Yıldızınız K Tayf Türüne aittir. K sınıfı yıldızlar, güneşimizden biraz daha yüzey sıcaklığı düşük olan turuncumsu yıldızlardır. K sınıfı yıldızlara örnek verilirse en yakın komşumuz Alfa Centauri B bir K sınıfı yıldız tipidir.")

elif(3900>t>=2500):
  print("Yıldızınız 'Turuncu-Kırmızı' renktedir." )
  print("Yıldızınız M Tayf Türüne aittir. M sınıfı, en yaygın yıldız sınıfıdır. Güneş'e komşu ana dizin yıldızlarının 1.32'sinde 1'i M yıldızıdır. Güneş'i çevreleyen yıldızlararası boşlukta ana dizin yıldızlarının yaklaşık yüzde 76'sı M sınıfına ait kırmızı cüce yıldızlardır. ")

else:
  print("Yıldızınız Anakol Yıldızı sınıflandırmasına girmemektedir. Lütfen kaynaklarınızı tekrar kontrol ediniz.")
    */
  }

  return (
    <SafeAreaView style={{ backgroundColor: isDarkMode ? "#121212" : "#fff", flex: 1, alignItems: "center" }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <Text style={{color: yildizRengi,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    marginTop:32,
    textAlign: "center",
    borderColor: yildizRengi,
    padding: 8,
    paddingHorizontal: 16}}>Anakol yıldızının sıcaklığını Kelvin cinsinden giriniz</Text>
      <TextInput onChangeText={handleYazi} value={inputText} inputMode='numeric' placeholder='Kelvin cinsinden sıcaklık' style={{ color: yildizRengi, borderWidth: 1, padding: 8, width: "70%", borderColor: yildizRengi, borderRadius: 8, marginTop: 12 }}></TextInput>
      <Text style={{ color: yildizRengi, marginTop: 12, fontSize: 24 }}>Anakol yıldızının durumu:</Text>
      <Star size={144} color={yildizRengi} weight='fill' />
      <Text style={{color: yildizRengi,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    borderColor: yildizRengi,
    padding: 8,
    paddingHorizontal: 16}}>Türe göre örnek yıldız: {ornekYildiz}</Text>
      <Text style={{color: yildizRengi,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    borderColor: yildizRengi,
    padding: 8,
    marginTop:24,
    paddingHorizontal: 16}}>Anakol yıldızının tayfı: {tur.length!=0 ? tur : "Yıldızınız anakol yıldızı sınıflandırmasına girmemektedir, lütfen kaynaklarınızı tekrar kontrol edin."}</Text>
      <Text style={{color: yildizRengi,
    fontSize: 16,
    borderWidth: tur.length!=0?1:0,
    borderRadius: 4,
    textAlign: "center",
    marginTop:16,
    borderColor: yildizRengi,
    padding: 8,
    paddingHorizontal: 16}}>{bilgi}</Text>
    <Image  source={{ width:100, height:100, uri:"https://www.google.com/url?sa=i&url=https%3A%2F%2Ftwitter.com%2FBilsemCigli&psig=AOvVaw0tQmCascemInbh-jy_xowA&ust=1684755942810000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCODBvo6rhv8CFQAAAAAdAAAAABAE"}}/>
    </SafeAreaView>
  );


}

const styles = StyleSheet.create({
  text: {
    color: "wheat",
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 4,
    textAlign: "center",
    borderColor: "wheat",
    padding: 8,
    paddingHorizontal: 16
  },

  animatedText: {
    color: "purple",
    fontWeight: "normal",
  },

  baslat: {
    color: "wheat",
    fontSize: 16,
    padding: 8
  },
  buton: {
    borderWidth: 1,
    borderColor: "wheat",
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    backgroundColor: "#121212",
    borderRadius: 12,
    position: "absolute"
  },
  ticker: {
    color: "wheat",
    fontSize: 36,
  },
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: 'grey',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: "#161616"
  },
  bottomSheetBackground: {
    backgroundColor: "#161616",
  },
  handleIndicatorStyle: {
    backgroundColor: "wheat"
  }
})


export default App;
