import { defineStore } from 'pinia'
import { reactive } from "vue";
import getTimeInSeconds from '@/helpers/getTimeInSeconds.js'

export const leadersRatingStore = defineStore('leaders-rating',() => {
    let leaders = reactive([])

    function sortLeaders() {
        leaders.sort((a, b) => getTimeInSeconds(a.time) - getTimeInSeconds(b.time))
        leaders.splice(10)
    }

    function getLeaders() {
        try {
            if (!leaders.length) {
                const array = JSON.parse(localStorage.getItem('leaders'))
                array?.forEach((el) => {
                    leaders.push(el)
                })
            }
        } catch (e) {
            console.log(e)
        }

    }

    function setLeader({name, mode, time}) {
        leaders.push({
            name: name,
            mode: mode,
            time: time,
        })
        sortLeaders()
        localStorage.setItem('leaders', JSON.stringify(leaders))
    }

    return {
        leaders,
        setLeader,
        getLeaders,
    }
})