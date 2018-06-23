import axios from "axios";
import request from "request"
 
 export default {
 // Gets all Players
 getPlayers: function() {
    return axios.get("api/players").then((response)=>console.log(response));
  },


  // Saves a Player to the database
  savePlayer: function(PlayerData) {
    return axios.post("api/players", PlayerData);
  },

  findPlayer : function(id){
    return axios.get("api/players/" + id);
  },

  updateHand: function(id){
    return axios.post(`api/players/${id}`)
  },

  // GAME FUNCTIONS / ROUTES

  // Saves game, this will exxecute when user creates a new game
  createGame : function(){
        return axios.post(`api/games`)
  },

  updateDeck : function(id, deck){
      return axios.post(`api/players/${id}`)
  },


  // registerUser : function(){
  //   return axios.post('user/register')
  // },



}