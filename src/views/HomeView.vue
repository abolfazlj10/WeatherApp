<script setup>
import { onBeforeMount } from 'vue';
import { useCounterStore } from '../stores/counter';

const store = useCounterStore()
  onBeforeMount(()=>{
    store.serachAutoCountry()
    store.apiDate()
})

</script>
<style>
@import url(../assets/style/aj.css);
@import url(../assets/style/respansive.css);
@import url(../assets/style/all.css);
</style>

<template>
<div class="cadrApp">
        <div class="InputAndDate" :class="[(store.namePicture == 'Thunderstorm' ? 'Thunderstorm' : '') ,(store.namePicture == 'Drizzle' ? 'raini' : '') , (store.namePicture == 'Rain' ? 'raini' : '') , (store.namePicture == 'Snow' ? 'snow' : '') , (store.namePicture == 'Atmosphere' ? 'Atmospheri' : '')  , (store.namePicture == 'Clear' ? 'clear' : '') , (store.namePicture == 'Clouds' ? 'clouds' : ''), (store.namePicture == 'Haze' ? 'Haze' : ''), (store.namePicture == 'Mist' ? 'Mist' : ''), (store.namePicture == 'Tornado' ? 'Tornado' : ''), (store.namePicture == 'Smoke' ? 'Smoke' : '')]">
            <div class="InputDate">
                <div class="InputCity" :class="(store.styleErorr) ? 'errInput' : ''">
                    <input  :class="(store.styleErorr) ? 'errInput' : ''" @keypress="store.displayAutoConmplete = true" @keyup="store.SearchStringInput"    @keyup.enter="store.SaveInfoLocation(); store.findCity();" v-model="store.citySearchInput" placeholder="شهر مورد نظر را جستجو کنید" type="text">
                    <button class="IconSearch" @click="store.SaveInfoLocation() ;store.findCity();"><i  class="fa-solid fa-magnifying-glass-location"></i></button>
                    <div v-show="store.displayAutoConmplete && store.resultscityFindArry.length != 0" class="autoCom">
                        <div v-for="city in store.resultscityFindArry" @click="store.SelectItem(city)">{{city[0]}} </div>
                    </div>
                </div>
                <p>{{store.city}}{{store.country}}</p>
                <p>{{store.dateDay}}</p>
                <p id="DateTime">{{store.TimeDate()}}</p>
            </div>
            <div class="btnC">
                <button @click="store.ModeTemp = 'c'" :style="(store.ModeTemp == 'c') ? 'background-color: #00d2ff; color: #06283D;' : 'box-shadow: rgb(76 76 86 / 25%) 0px 30px 60px -12px inset, rgb(88 71 71 / 8%) 0px 18px 36px -18px inset;transition: 0.1s all ease-in;' " >°C</button>
            </div>
        </div>
        <div class="InfoWeather">
            <div class="Info">
                <p><span v-if="store.ModeTemp == 'c'">{{store.tempC}}°C</span><span v-if="store.ModeTemp == 'f'">{{store.tempF}}°F</span> : دما</p>
                <p>
                    <i v-if="(store.namePicture ==  'Rain')" class="fa-solid fa-cloud-showers-heavy"></i> 
                    <i v-if="(store.namePicture ==  'Drizzle')" class="fa-solid fa-cloud-showers-heavy"></i> 
                    <i v-if="(store.namePicture == 'Clear')" class="fa-regular fa-sun"></i>
                    <i v-if="(store.namePicture == 'snow')" class="fa-regular fa-snowflake"></i>
                    <i v-if="(store.namePicture == 'Thunderstorm')" class="fa-solid fa-cloud-bolt"></i>
                    <i v-if="(store.namePicture == 'Mist')" class="fa-solid fa-smog"></i>
                    <i v-if="(store.namePicture == 'Tornado')" class="fa-solid fa-smog"></i>
                    <i v-if="(store.namePicture == 'Clouds')" class="fa-solid fa-cloud"></i>
                    <i v-if="(store.namePicture == 'Haze')" class="fa-solid fa-smog"></i>
                    <i v-if="(store.namePicture == 'Smoke')" class="fa-solid fa-smog"></i>
                    وضعیت : {{store.statusWeatherPersianResultLon}} 
                
                </p> 
                <p> <span v-if="store.ModeTemp == 'c'">{{store.windC}}Km</span><span v-if="store.ModeTemp == 'f'">{{store.windF}}Mi</span> : باد</p>
                <p> {{store.humidity}} : رطوبت</p>
                
            </div>
            <div class="btnF">
                <button @click="store.ModeTemp ='f'" :style="(store.ModeTemp == 'f') ? 'background-color: #00d2ff; color: #06283D;' : 'box-shadow: rgb(76 76 86 / 25%) 0px 30px 60px -12px inset, rgb(88 71 71 / 8%) 0px 18px 36px -18px inset;transition: 0.1s all ease-in;' ">°F</button>
            </div>
        </div>
</div>

</template>