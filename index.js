import dragBallComponent from './components/dragBallComponent';

export default {
  install: (Vue)=> {
    Vue.component('drag-ball', dragBallComponent)
  }
}
