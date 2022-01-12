const  Discord = require('discord.js');
const { Client, RichEmbed,Attachment } = require('discord.js');
const client = new Discord.Client()


client.on('ready' , () => {
    console.log("connected as " + client.user.tag)

  
      client.user.setActivity("Our Style Brawlball Youtube" , {type:"STREAMING",url:"https://www.youtube.com/watch?v=KV-8PCeqPzg"})
})

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // ROLE CHANNEL ROLES CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('ready', async () => {
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('813032245941239828');
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('813032246704341002');
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('813032247601922058');
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('813032248106025001');
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('813032272428793946');
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('813032273338695710');
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('866380703762350091');
  client.guilds.cache.get('535515917518372884').channels.cache.get('736380370651709531').messages.fetch('867423471507341323');


});
//const bhbh = message.guild.emojis.cache.get('812688156067102730')
//const bbbb = message.guild.emojis.cache.get('812687904290897961')
            //////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////Brawlhalla ADD REACT/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////

            //////////////////////////////////////////////////////////////////////////////////////////////////////////
            client.on('messageReactionAdd', (messageReaction, user) => {

              //BRAWLHALLA add
              
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                  const bhbh = message.guild.emojis.cache.get('812688156067102730')
                if(emoji.id == bhbh) {
              
                message.guild.members.fetch(user.id).then(member => {
                  if(user.bot)  return;
                else { 
              member.roles.add('817549479220609025')
               }})
                }}});

                client.on('messageReactionRemove', (messageReaction, user) => {

                  //BRAWLHALLA remove
                  
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                      const bhbh = message.guild.emojis.cache.get('812688156067102730')
                    if(emoji.id == bhbh) {
                  
                    message.guild.members.fetch(user.id).then(member => {
                      if(user.bot)  return;
                    else { 
                  member.roles.remove('817549479220609025')
                   }})
                    }}});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

                client.on('messageReactionAdd', (messageReaction, user) => {

                  //BRAWLBALL
                  
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                      const bbbb = message.guild.emojis.cache.get('812687904290897961')
                    if(emoji.id == bbbb) {
                  
                    message.guild.members.fetch(user.id).then(member => {
                      if(user.bot)  return;
                    else { 
                  member.roles.add('727591689639952434')
                    }})
                    }}});

                    client.on('messageReactionRemove', (messageReaction, user) => {

                      //BRAWLBALL
                      
                        const { message, emoji } = messageReaction;
                        if(message.channel.id == '736380370651709531'){
                          const bbbb = message.guild.emojis.cache.get('812687904290897961')
                        if(emoji.id == bbbb) {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.remove('727591689639952434')
                        }})
                        }}});
    
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////


                    client.on('messageReactionAdd', (messageReaction, user) => {

                      //EU
                      
                        const { message, emoji } = messageReaction;
                        if(message.channel.id == '736380370651709531'){
                        if(emoji.name == "🇪🇺") {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.add('812717125646286859')
                        }})
                        }}});

                        
                    client.on('messageReactionRemove', (messageReaction, user) => {

                      //EU
                      
                        const { message, emoji } = messageReaction;
                        if(message.channel.id == '736380370651709531'){
                        if(emoji.name == "🇪🇺") {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.remove('812717125646286859')
                        }})
                        }}});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

                        client.on('messageReactionAdd', (messageReaction, user) => {

                          //US-E add
                          
                            const { message, emoji } = messageReaction;
                            if(message.channel.id == '736380370651709531'){
                            if(emoji.name == "🇺🇸") {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.add('812717780217757716')
                            }})
                            }}});

                            client.on('messageReactionRemove', (messageReaction, user) => {

                              //US-E remove
                              
                                const { message, emoji } = messageReaction;
                                if(message.channel.id == '736380370651709531'){
                                if(emoji.name == "🇺🇸") {
                              
                                message.guild.members.fetch(user.id).then(member => {
                                  if(user.bot)  return;
                                else { 
                              member.roles.remove('812717780217757716')
                                }})
                                }}});
                                //////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

                        client.on('messageReactionAdd', (messageReaction, user) => {

                          //SEA add
                          
                            const { message, emoji } = messageReaction;
                            if(message.channel.id == '736380370651709531'){
                              if (emoji.name == '🇸🇬') {
                          
                            message.guild.members.fetch(user.id).then(member => {
                              if(user.bot)  return;
                            else { 
                          member.roles.add('867357084084338688')
                            }})
                            }}});

                            client.on('messageReactionRemove', (messageReaction, user) => {

                              //SEA remove
                              
                                const { message, emoji } = messageReaction;
                                if(message.channel.id == '736380370651709531'){
                                  if (emoji.name == '🇸🇬') {
                              
                                message.guild.members.fetch(user.id).then(member => {
                                  if(user.bot)  return;
                                else { 
                              member.roles.remove('867357084084338688')
                                }})
                                }}});


//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionAdd', (messageReaction, user) => {

  //BRZ add
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '736380370651709531'){
      if (emoji.name == '🇧🇷') {
  
    message.guild.members.fetch(user.id).then(member => {
      if(user.bot)  return;
    else { 
  member.roles.add('867357087634030612')
    }})
    }}});

    client.on('messageReactionRemove', (messageReaction, user) => {

      //BRZ remove
      
        const { message, emoji } = messageReaction;
        if(message.channel.id == '736380370651709531'){
          if (emoji.name == '🇧🇷') {
      
        message.guild.members.fetch(user.id).then(member => {
          if(user.bot)  return;
        else { 
      member.roles.remove('867357087634030612')
        }})
        }}});
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionAdd', (messageReaction, user) => {

  //AUS add
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '736380370651709531'){
      if (emoji.name == '🇦🇺') {
  
    message.guild.members.fetch(user.id).then(member => {
      if(user.bot)  return;
    else { 
  member.roles.add('867357091554525184')
    }})
    }}});

    client.on('messageReactionRemove', (messageReaction, user) => {

      //AUS remove
      
        const { message, emoji } = messageReaction;
        if(message.channel.id == '736380370651709531'){
          if (emoji.name == '🇦🇺') {
      
        message.guild.members.fetch(user.id).then(member => {
          if(user.bot)  return;
        else { 
      member.roles.remove('867357091554525184')
        }})
        }}});
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionAdd', (messageReaction, user) => {

  //JPN add
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '736380370651709531'){
      if (emoji.name == '🇯🇵') {
  
    message.guild.members.fetch(user.id).then(member => {
      if(user.bot)  return;
    else { 
  member.roles.add('867357613648773130')
    }})
    }}});

    client.on('messageReactionRemove', (messageReaction, user) => {

      //JPN remove
      
        const { message, emoji } = messageReaction;
        if(message.channel.id == '736380370651709531'){
          if (emoji.name == '🇯🇵') {
      
        message.guild.members.fetch(user.id).then(member => {
          if(user.bot)  return;
        else { 
      member.roles.remove('867357613648773130')
        }})
        }}});











                                            //////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////DEVICE ADD REACT/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////

            //////////////////////////////////////////////////////////////////////////////////////////////////////////
            client.on('messageReactionAdd', (messageReaction, user) => {

              //PC add
              
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                if(emoji.name == "🖥️") {
              
                message.guild.members.fetch(user.id).then(member => {
                  if(user.bot)  return;
                else { 
              member.roles.add('809862918866206720')
               }})
                }}});

                client.on('messageReactionRemove', (messageReaction, user) => {

                  //PC remove
                  
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                    if(emoji.name == "🖥️") {
                  
                    message.guild.members.fetch(user.id).then(member => {
                      if(user.bot)  return;
                    else { 
                  member.roles.remove('809862918866206720')
                   }})
                    }}});

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

                client.on('messageReactionAdd', (messageReaction, user) => {

                  //CONSOLE ADD
                  
                    const { message, emoji } = messageReaction;
                    if(message.channel.id == '736380370651709531'){
                    if(emoji.name == "🎮") {
                  
                    message.guild.members.fetch(user.id).then(member => {
                      if(user.bot)  return;
                    else { 
                  member.roles.add('809862993139204143')
                    }})
                    }}});

                    client.on('messageReactionRemove', (messageReaction, user) => {

                      //CONSOLE REMOVE
                      
                        const { message, emoji } = messageReaction;
                        if(message.channel.id == '736380370651709531'){
                        if(emoji.name == "🎮") {
                      
                        message.guild.members.fetch(user.id).then(member => {
                          if(user.bot)  return;
                        else { 
                      member.roles.remove('809862993139204143')
                        }})
                        }}});
    
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////POSITION ADD REACT/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////


client.on('messageReactionAdd', (messageReaction, user) => {

//Runner

  const { message, emoji } = messageReaction;
  if(message.channel.id == '736380370651709531'){
    const run = message.guild.emojis.cache.get('812687908389388289')
  if(emoji.id == run) {

  message.guild.members.fetch(user.id).then(member => {
    if(user.bot)  return;
  else { 
member.roles.add('731318841287770124')
member.roles.add('736222790516211723')}
  })
  }}});


  client.on('messageReactionAdd', (messageReaction, user) => {
    //Supporter
    
      const { message, emoji } = messageReaction;
      if(message.channel.id == '736380370651709531'){
        const sup = message.guild.emojis.cache.get('812687905125826560')
      if(emoji.id == sup) {

      message.guild.members.fetch(user.id).then(member => {
        if(user.bot)  return;
      else { 
member.roles.add('731318841287770124')
member.roles.add('736222933827190835')}
      })
      }
      
    }});
  


      client.on('messageReactionAdd', (messageReaction, user) => {
        //Defender

          const { message, emoji } = messageReaction;
          if(message.channel.id == '736380370651709531'){
            const def = message.guild.emojis.cache.get('812687905838727168')
          if(emoji.id == def) {
    
          message.guild.members.fetch(user.id).then(member => {
            if(user.bot)  return;
          else { 
member.roles.add('731318841287770124')
member.roles.add('736222973140402246')}
          })
          }}});



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////ANIME///////////////////////////////////////////////////////////////////////////////



          client.on('messageReactionAdd', (messageReaction, user) => {
            //anime

              const { message, emoji } = messageReaction;
              if(message.channel.id == '736380370651709531'){
              if(emoji.name == '🈂️') {
        
              message.guild.members.fetch(user.id).then(member => {
                if(user.bot)  return;
              else { 
    member.roles.add('793151150479114252')}
              })
              }}});
              client.on('messageReactionRemove', (messageReaction, user) => {
                //anime
    
                  const { message, emoji } = messageReaction;
                  if(message.channel.id == '736380370651709531'){
                  if(emoji.name == '🈂️') {
            
                  message.guild.members.fetch(user.id).then(member => {
                    if(user.bot)  return;
                  else { 
        member.roles.remove('793151150479114252')}
                  })
                  }}});


            //////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////POSITION REMOVE REACT/////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////////////////


            client.on('messageReactionRemove', (messageReaction, user) => {

              //remove Runner
              
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                  const run = message.guild.emojis.cache.get('812687908389388289')
                if(emoji.id == run) {
          
                message.guild.members.fetch(user.id).then(member => {
                  if(user.bot)  return;
                else { member.roles.remove('736222790516211723')}
                })
                }}});


            client.on('messageReactionRemove', (messageReaction, user) => {
            
              // remove supporter
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                  const sup = message.guild.emojis.cache.get('812687905125826560')
                  if(emoji.id == sup) {
                message.guild.members.fetch(user.id).then(member => {
                  if(user.bot)  return;
                else { member.roles.remove('736222933827190835')}
                })
                }
                
              }});

              client.on('messageReactionRemove', (messageReaction, user) => {
                //remove Defender
    
                  const { message, emoji } = messageReaction;
                  if(message.channel.id == '736380370651709531'){
                    const def = message.guild.emojis.cache.get('812687905838727168')
                  if(emoji.id == def) {
            
                  message.guild.members.fetch(user.id).then(member => {
                    if(user.bot)  return;
                  else { member.roles.remove('736222973140402246')}
                  })
                  }}});
////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////// ADD COLORS ///////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionAdd', (messageReaction, user) => {

//blue

const { message, emoji } = messageReaction;
if(message.channel.id == '736380370651709531'){
if(emoji.name == '🟦') {

message.guild.members.fetch(user.id).then(member => {
  if(user.bot)  return;
else { member.roles.add('615317792677298192')
member.roles.add('731432571073986561')
}
})
}}});


client.on('messageReactionAdd', (messageReaction, user) => {
  //yellow
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '736380370651709531'){
    if(emoji.name == '🟨') {

    message.guild.members.fetch(user.id).then(member => {
      if(user.bot)  return;
    else { member.roles.add('615317793159512074')
    member.roles.add('731432571073986561')
  }
    })
    }
    
  }});



    client.on('messageReactionAdd', (messageReaction, user) => {
      //orange

        const { message, emoji } = messageReaction;
        if(message.channel.id == '736380370651709531'){
        if(emoji.name == '🟧') {
  
        message.guild.members.fetch(user.id).then(member => {
          if(user.bot)  return;
        else { member.roles.add('615317792756858895')
        member.roles.add('731432571073986561')
      }
        })
        }}});



        client.on('messageReactionAdd', (messageReaction, user) => {
          //black

            const { message, emoji } = messageReaction;
            if(message.channel.id == '736380370651709531'){
            if(emoji.name == '⬛') {
      
            message.guild.members.fetch(user.id).then(member => {
              if(user.bot)  return;
            else { member.roles.add('615317792664715306')
            member.roles.add('731432571073986561')
          }
            })
            }}});



            client.on('messageReactionAdd', (messageReaction, user) => {
              //pink
  
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                if(emoji.name == '🦑') {
          
                message.guild.members.fetch(user.id).then(member => {
                  if(user.bot)  return;
                else { member.roles.add('615317792723304488')
                member.roles.add('731432571073986561')
              }
                })
                }}});
          /////////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////    COLOR REMOVE REACT    ///////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////

client.on('messageReactionRemove', (messageReaction, user) => {

//blue

const { message, emoji } = messageReaction;
if(message.channel.id == '736380370651709531'){
if(emoji.name == '🟦') {

message.guild.members.fetch(user.id).then(member => {
  if(user.bot)  return;
else { member.roles.remove('615317792677298192')}
})
}}});


client.on('messageReactionRemove', (messageReaction, user) => {
  //yellow
  
    const { message, emoji } = messageReaction;
    if(message.channel.id == '736380370651709531'){
    if(emoji.name == '🟨') {

    message.guild.members.fetch(user.id).then(member => {
      if(user.bot)  return;
    else { member.roles.remove('615317793159512074')}
    })
    }
    
  }});



    client.on('messageReactionRemove', (messageReaction, user) => {
      //orange

        const { message, emoji } = messageReaction;
        if(message.channel.id == '736380370651709531'){
        if(emoji.name == '🟧') {
  
        message.guild.members.fetch(user.id).then(member => {
          if(user.bot)  return;
        else { member.roles.remove('615317792756858895')}
        })
        }}});



        client.on('messageReactionRemove', (messageReaction, user) => {
          //black

            const { message, emoji } = messageReaction;
            if(message.channel.id == '736380370651709531'){
            if(emoji.name == '⬛') {
      
            message.guild.members.fetch(user.id).then(member => {
              if(user.bot)  return;
            else { member.roles.remove('615317792664715306')}
            })
            }}});



            client.on('messageReactionRemove', (messageReaction, user) => {
              //pink
  
                const { message, emoji } = messageReaction;
                if(message.channel.id == '736380370651709531'){
                if(emoji.name == '🦑') {
          
                message.guild.members.fetch(user.id).then(member => {
                  if(user.bot)  return;
                else { member.roles.remove('615317792723304488')}
                })
                }}});

                  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                  
                  /////////////////////////////////////////////////////////////////////////////////////////////////////////////

                  //////////////////////////////////////////////////////////////////////////////////////////////////////////

                  client.on('messageReactionAdd', (messageReaction, user) => {

                    //valorant
                    
                      const { message, emoji } = messageReaction;
                      if(message.channel.id == '736380370651709531'){
                        const valo = message.guild.emojis.cache.get('812593562704412682')
                      if(emoji.id == valo) {
                
                      message.guild.members.fetch(user.id).then(member => {
                        if(user.bot)  return;
                      else {
                        member.roles.add('731528561969856622')
                        member.roles.add('731528037291524158')
                        member.roles.add('817726951962705930')
                      }
                      })
                      }}});
                
                
                      client.on('messageReactionAdd', (messageReaction, user) => {
                        //minecraft
                        
                          const { message, emoji } = messageReaction;
                          if(message.channel.id == '736380370651709531'){
                            const mc = message.guild.emojis.cache.get('812594808672747540')
                          if(emoji.id == mc) {
                    
                          message.guild.members.fetch(user.id).then(member => {
                            if(user.bot)  return;
                          else { member.roles.add('731528298445668442')
                          member.roles.add('731528037291524158')
                          member.roles.add('817726951962705930')
                        }
                          })
                          }
                          
                        }});
                      
                  
                
                          client.on('messageReactionAdd', (messageReaction, user) => {
                            //among us
                
                              const { message, emoji } = messageReaction;
                              if(message.channel.id == '736380370651709531'){
                                const among = message.guild.emojis.cache.get('812457492214579242')
                              if(emoji.id == among) {
                        
                              message.guild.members.fetch(user.id).then(member => {
                                if(user.bot)  return;
                              else { member.roles.add('812452159773343765')
                              member.roles.add('731528037291524158')
                              member.roles.add('817726951962705930')
                            }
                              })
                              }}});



                              client.on('messageReactionAdd', (messageReaction, user) => {
                                //rocket league
                    
                                  const { message, emoji } = messageReaction;
                                  if(message.channel.id == '736380370651709531'){
                                    const rocket = message.guild.emojis.cache.get('812593998631403581')
                                  if(emoji.id ==rocket) {
                            
                                  message.guild.members.fetch(user.id).then(member => {
                                    if(user.bot)  return;
                                  else { member.roles.add('759441333584265247')
                                  member.roles.add('731528037291524158')
                                  member.roles.add('817726951962705930')
                                }
                                  })
                                  }}});
                
                
                             
                
                
                                //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////POSITION REMOVE REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                
                                client.on('messageReactionRemove', (messageReaction, user) => {
                
                                  //remove valorant
                                  
                                    const { message, emoji } = messageReaction;
                                    if(message.channel.id == '736380370651709531'){
                                      const valo = message.guild.emojis.cache.get('812593562704412682')
                                    if(emoji.id == valo) {
                              
                                    message.guild.members.fetch(user.id).then(member => {
                                      if(user.bot)  return;
                                    else {
                                       if (member.roles.cache.some(role => role.name === 'Minecraft')|| member.roles.cache.some(role => role.name === 'Rocket League') || member.roles.cache.some(role => role.name === 'Among us')) {
                                        member.roles.remove('731528561969856622')
                                       }
                                      else{ member.roles.remove('817726951962705930')
                                      member.roles.remove('731528561969856622')

                                    }

                                       
                                      }
                                    })
                                    }}});
                
                
                                client.on('messageReactionRemove', (messageReaction, user) => {
                                
                                  // remove minecraft
                                    const { message, emoji } = messageReaction;
                                    if(message.channel.id == '736380370651709531'){
                                      const mc = message.guild.emojis.cache.get('812594808672747540')
                                      if(emoji.id == mc) {
                                    message.guild.members.fetch(user.id).then(member => {
                                      if(user.bot)  return;
                                    else { 
                                      if (member.roles.cache.some(role => role.name === 'Valorant')|| member.roles.cache.some(role => role.name === 'Rocket League') || member.roles.cache.some(role => role.name === 'Among us')) {
                                        member.roles.remove('731528298445668442')                                       }
                                      else{ member.roles.remove('817726951962705930')
                                      member.roles.remove('731528298445668442')
                                    }
                                      }
                                    })
                                    }
                                    
                                  }});
                
                                  client.on('messageReactionRemove', (messageReaction, user) => {
                                    //remove among
                        
                                      const { message, emoji } = messageReaction;
                                      if(message.channel.id == '736380370651709531'){
                                        const among = message.guild.emojis.cache.get('812457492214579242')
                                      if(emoji.id == among) {
                                
                                      message.guild.members.fetch(user.id).then(member => {
                                        if(user.bot)  return;
                                      else { 
                                        if (member.roles.cache.some(role => role.name === 'Minecraft')|| member.roles.cache.some(role => role.name === 'Rocket League') || member.roles.cache.some(role => role.name === 'Valorant')) {
                                          member.roles.remove('812452159773343765')}
                                          else{ member.roles.remove('817726951962705930')
                                        member.roles.remove('812452159773343765')}
                                      }
                                      })
                                      }}});


                                      client.on('messageReactionRemove', (messageReaction, user) => {
                                        //remove rocket league
                            
                                          const { message, emoji } = messageReaction;
                                          if(message.channel.id == '736380370651709531'){
                                            const rocket = message.guild.emojis.cache.get('812593998631403581')
                                          if(emoji.id == rocket) {
                                    
                                          message.guild.members.fetch(user.id).then(member => {
                                            if(user.bot)  return;
                                          else { 
                                            if (member.roles.cache.some(role => role.name === 'Minecraft')|| member.roles.cache.some(role => role.name === 'Valorant') || member.roles.cache.some(role => role.name === 'Among us')) {
                                              member.roles.remove('759441333584265247')}
                                              else{ member.roles.remove('817726951962705930')
                                              member.roles.remove('759441333584265247')}}
                                            })
                                          }}});
        





     //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////info REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //server update add
                                            
                                              const { message, emoji } = messageReaction;
                                              if(message.channel.id == '736380370651709531'){
                                              if(emoji.name == "📳") {
                                            
                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('856213114529382460')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //server update remove
                                                
                                                  const { message, emoji } = messageReaction;
                                                  if(message.channel.id == '736380370651709531'){
                                                  if(emoji.name == "📳") {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('856213114529382460')
                                                  }})
                                                  }}});



                                                       //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////tourney info REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //tourney  add
                                            
                                              const { message, emoji } = messageReaction;
                                              if(message.channel.id == '736380370651709531'){
                                              if(emoji.name == "🏆") {
                                            
                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('856213107634208770')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //tourney remove
                                                
                                                  const { message, emoji } = messageReaction;
                                                  if(message.channel.id == '736380370651709531'){
                                                  if(emoji.name == "🏆") {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('856213107634208770')
                                                  }})
                                                  }}});


                    //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////ranked eu  REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //ranked eu  add

                                              const { message, emoji } = messageReaction; 

                                              if(message.channel.id == '736380370651709531'){
                                              const eueu = message.guild.emojis.cache.get('867357737326739496')
                                              if(emoji.id == eueu) {

                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('867319638663757834')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //ranked eu remove
                                                
                                              const { message, emoji } = messageReaction;
                                              if(message.channel.id == '736380370651709531'){
                                                const eueu = message.guild.emojis.cache.get('867357737326739496')
                                              if(emoji.id == eueu) {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('867319638663757834')
                                                  }})
                                                  }}});

                                                                                                                                     //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////ranked NA  REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //ranked na  add
                                            

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const useuse = message.guild.emojis.cache.get('867355493671501844')

                                            if(emoji.id == useuse) {
                                            
                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('867319905607352370')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //ranked na remove

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const useuse = message.guild.emojis.cache.get('867355493671501844')

                                            if(emoji.id == useuse) {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('867319905607352370')
                                                  }})
                                                  }}});



                                                  
                                                                                                                                     //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////ranked SEA  REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //ranked sea  add

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const seasea = message.guild.emojis.cache.get('867356279650910214')

                                            if(emoji.id == seasea) {
                                            
                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('867320156254634055')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //ranked sea remove

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const seasea = message.guild.emojis.cache.get('867356279650910214')

                                            if(emoji.id == seasea) {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('867320156254634055')
                                                  }})
                                                  }}});




                                                                                                                             //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////ranked BRZ  REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //ranked brz  add

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const brzbrz = message.guild.emojis.cache.get('867356573369892874')

                                            if(emoji.id == brzbrz) {
                                            
                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('867320578079850507')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //ranked brz remove

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const brzbrz = message.guild.emojis.cache.get('867356573369892874')

                                            if(emoji.id == brzbrz) {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('867320578079850507')
                                                  }})
                                                  }}});



                                                                    //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////ranked AUS  REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //ranked aus  add
                                            

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const ausaus = message.guild.emojis.cache.get('867359798165110834')

                                            if(emoji.id == ausaus) {
                                            
                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('867320444728901662')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //ranked aus remove

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const ausaus = message.guild.emojis.cache.get('867359798165110834')

                                            if(emoji.id == ausaus) {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('867320444728901662')
                                                  }})
                                                  }}});





                                                  //////////////////////////////////////////////////////////////////////////////////////////////////////////
                
                    ////////////////////////////////////////ranked JPN  REACT/////////////////////////////////////////////////////////////////
                    
                    ////////////////////////////////////////////////////////////////////////////////////////////////////////




                                          client.on('messageReactionAdd', (messageReaction, user) => {

                                            //ranked jpn  add
                                            

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const jpnjpn = message.guild.emojis.cache.get('867356585910861854')

                                            if(emoji.id == jpnjpn) {
                                            
                                              message.guild.members.fetch(user.id).then(member => {
                                                if(user.bot)  return;
                                              else { 
                                            member.roles.add('867352794410123264')
                                              }})
                                              }}});
                  
                                              client.on('messageReactionRemove', (messageReaction, user) => {
                  
                                                //ranked jpn remove

                                            const { message, emoji } = messageReaction;
                                            if(message.channel.id == '736380370651709531'){
                                              const jpnjpn = message.guild.emojis.cache.get('867356585910861854')

                                            if(emoji.id == jpnjpn) {
                                                
                                                  message.guild.members.fetch(user.id).then(member => {
                                                    if(user.bot)  return;
                                                  else { 
                                                member.roles.remove('867352794410123264')
                                                  }})
                                                  }}});







client.on('message', message => {
  if (message.content === '!editez') {
    let embed = new Discord.MessageEmbed()
    .setTitle('Do you like Brawlhalla?')
    .setColor("#FF0000")
    .setThumbnail("https://static.miraheze.org/awesomegameswiki/6/67/Brawlhalla.jpg")
    .setDescription('React with this')
    .addField('**Brawlhalla**', '<:bh:812688156067102730>', false)
    .addField('**Brawlball**', '<:bb:812687904290897961>', false)
    .addField('**EU**', ':flag_eu:', true)
    .addField('**NA**', ':flag_us:', true)
    .addField('**SEA**', ':flag_sg:', true)
    .addField('**BRZ**', ':flag_br:', true)
    .addField('**JPN**', ':flag_jp:', true)
    .addField('**AUS**', ':flag_au:', true)
    message.channel.messages.fetch("813032245941239828")
    .then(messages => {
  messages.edit(embed);
  })
  }
})


                                                //   client.on('message' , message => {
                                                //     if(message.content=="!dorole"){
                                                //   let embed77 = new Discord.MessageEmbed()
                                                //   .setTitle("**Regional Ranked Lobbies**")
                                                //   .setColor('#0000ff')
                                                //   .setDescription("React to this if you want to get pinged for regional ranked lobbies")
                                                //   .setThumbnail("https://www.brawlhalla.com/c/uploads/2021/07/1024x576_Rankeds21.jpg")
                                                //   .addField("EU Ranked","<:eu:867357737326739496>",true)
                                                //   .addField("NA Ranked","<:use:867355493671501844>",true)
                                                //   .addField("SEA Ranked","<:sea:867356279650910214>",true)
                                                //   .addField("BRZ Ranked","<:brz:867356573369892874>",true)
                                                //   .addField("AUS Ranked","<:aus:867359798165110834>",true)
                                                //   .addField("JPN Ranked","<:jpn:867356585910861854>",true)
                                                //       message.channel.send(embed77);
                                                // }})

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // RANDOM TEAMS CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('message' , message => {
  const prefix = "%"
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  const args1 = message.content.slice(prefix.length).trim().split(/ +/g);
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  var gg=args1[1]
  if(cmd === "team"){
    if (message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
      message.reply("Commands aren't allowed  here")}
      else{
   const array = new Array()  
  for (var j = 1; j <= args.length-1; j++){
  array.push(args[j]);
  }
  var nonae = -1
  var nonaeteam = 0
  var teamnamenumber = 1
  var lojok=new Array(); 
  while(array.length){
    nonae++
    
    const ndx = Math.random() * array.length | 0;
      const elem = array.splice(ndx,1)[0];
      if (nonae % gg == 0)
    {
        lojok.push("**----Team "+teamnamenumber+" ----**")
        nonaeteam++
        teamnamenumber++

    }
    lojok.push(elem)
    
      }

    if(nonaeteam <= 89){
    let embed77 = new Discord.MessageEmbed()
      .setTitle("**There are "+nonaeteam+" Teams **")
      .setColor('#ff0000')
      .setDescription(lojok)
      .setThumbnail("https://i.ibb.co/R0w1J9k/teams-2.png")
      .setFooter(message.author.username, message.author.avatarURL())
          message.channel.send(embed77);
    }
    else message.reply("Maximum Teams are 89")
  }
  }})
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // ALL PLAYERS POSITION CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if(message.content == `!positions`) {
    if (message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
      message.reply("Commands aren't allowed  here")}
      else{
    var oknnooo1 = message.guild.roles.cache.get('736222790516211723').members.map(m=>m.user).join('\n :football: ----- :man_running: \n')
         var kkoo1 = oknnooo1.substring(0).split(":football:")
        
         var oknnooo = message.guild.roles.cache.get('736222933827190835').members.map(m=>m.user).join('\n :football: ----- :traffic_light: \n')
         var kkoo = oknnooo.substring(0).split(":football:")

         var oknnooo2 = message.guild.roles.cache.get('736222973140402246').members.map(m=>m.user).join('\n :football: -------- : :shield: \n')
         var kkoo2 = oknnooo2.substring(0).split(":football:")

         var ttess=" "
         var jjess=" "
         var rress=" "
 
         var ttess1=" "
         var jjess1=" "
         var rress1=" "

         var ttess2=" "
         var jjess2=" "
         var rress2=" "

         for (var i = 0; i <= kkoo.length-1; i++){
          if (i<22){
          ttess =ttess+kkoo[i]
          }
        
          if (i>22 && i<44){
          jjess = jjess+kkoo[i]

        }
        if (i>44){
          rress = rress+kkoo[i]
      }
    }

    
        for (var j = 0; j <= kkoo1.length-1; j++){
          if (j<22){
          ttess1 =ttess1+kkoo1[j]
          }
        
         else if (j>22 && j<44){
          jjess1 = jjess1+kkoo1[j]
        }
       else if (i>44){
          rress1 = rress1+kkoo1[i]
      }
      }
         for (var k = 0; k <= kkoo2.length-1; k++){
      if (k<22){
      ttess2 =ttess2+kkoo2[k]
      }
    
      if (k>22 && k<44){
      jjess2 = jjess2+kkoo2[k]
    }
    if (i>44){
      rress2 = rress2+kkoo2[i]
  }
  }
    const ListEmbed1 = new Discord.MessageEmbed()
    .setTitle('**RUNNER PLAYERS**')
    .setColor('#00008B')
    .setThumbnail("https://i.ibb.co/k6qNt3N/Runner.png")
    .setDescription(kkoo1.length-1+" Runner players")
    .addField("Runners", ttess1,true)
    .addField("Runners ", jjess1 + "-",true)
    .addField("Runners ", rress1 + "-",true)
    message.channel.send(ListEmbed1)

const ListEmbed = new Discord.MessageEmbed()
    .setTitle('**SUPPORTER PLAYERS**')
    .setColor('#FFFF00')
    .setThumbnail("https://i.ibb.co/t3B9KTN/supporter.png")
    .setDescription(kkoo.length+" Supporter players")
    .addField("Supporters", ttess,true)
    .addField("Supporters ", jjess+"-",true)
    .addField("Supporters ", rress+"-",true)
    message.channel.send(ListEmbed)

    

    const ListEmbed2 = new Discord.MessageEmbed()
    .setTitle('**DEFENDER PLAYERS**')
    .setColor('#ff0000')
    .setThumbnail("https://i.ibb.co/nj1Cj5R/defender.png")
    .setDescription(kkoo2.length-1+" Defender players")
    .addField("Defenders", ttess2,true)  
    .addField("Defenders ", jjess2+"-",true)
    .addField("Defenders ", rress2+"-",true)
    message.channel.send(ListEmbed2)

  }         
 }})
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // HAPPY BIRHDAY CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === '!birthday') {
    const embed = new Discord.MessageEmbed()
      .setTitle('Here are all Our Style players birthday date')
      .setColor(0xFFFFFF)
      .setDescription('Do not forget to wish a happy birthday to everyone of us !')
      .setThumbnail('https://i.pinimg.com/originals/8b/de/81/8bde81e36644c034efbbd3c57a474847.png')
      .addField('Astru®','January 21', false)
      .addField('\n Styleken','April 24', false)
      .addField('\n DanzoDon','June 1', false)
      .addField('\n KaeptnKook','June 20', false)
      .addField('\n Glaedr','June 23', false)
      .addField('\n CTNS','August 3', false)
      .addField('\n Sanmaay','August 5', false)
      .addField('\n Pentane','August 10', false)
      .addField('\n otmanezza','August 12', false)
      .addField('\n Kenshiro','August 14 ', false)
      .addField('\n jimm25','September 30', false)
      .addField('\n jinleehurb','October 23', false)
      .addField('\n Kevin1185','November 2', false)
      .addField('\n LordCroissant','November 12', false)
      .addField('\n Junusbiaz','December 3', false)
      .setFooter('There will be a command soon that will send a reminder at the right days','https://i.pinimg.com/originals/8b/de/81/8bde81e36644c034efbbd3c57a474847.png')

    message.channel.send(embed)
  }
})
client.on('ready' , () => {
  var textchennelhaha = client.channels.cache.find(channel => channel.id === '727390897016144012')
  var text12chennelhaha = client.channels.cache.find(channel => channel.id === '535534516945682462')

  var d = new Date();

  setInterval(() => {
    textchennelhaha.send("Date is "+d.toLocaleDateString())
  }, 10800000);
  
client.on('message', message => {
  if (message.content === 'Date is 8/3/2020' ) {
    text12chennelhaha.send("Happy birthday <@456100864738983957>")
  }})
client.on('message', message => {
    if (message.content === 'Date is 8/5/2020' ) {
      text12chennelhaha.send("Happy birthday <@666455281596891149>")
    }})
client.on('message', message => {
      if (message.content === 'Date is 8/10/2020' ) {
        text12chennelhaha.send("Happy birthday <@727301310461771797>")
      }})
client.on('message', message => {
  if (message.content === 'Date is 8/12/2020' ) {
    text12chennelhaha.send("Happy birthday <@364069557951922176>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 8/14/2020' ) {
    text12chennelhaha.send("Happy birthday <@505751422449614878>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 30/9/2020' ) {
    text12chennelhaha.send("Happy birthday <@286209333488910336>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 10/23/2020' ) {
    text12chennelhaha.send("Happy birthday <@504543749293080597>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 11/2/2020' ) {
    text12chennelhaha.send("Happy birthday <@286208201186213888>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 11/12/2020' ) {
    text12chennelhaha.send("Happy birthday <@314532481519058944>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 12/3/2020' ) {
    text12chennelhaha.send("Happy birthday <@423131212945817620>")
  }})


client.on('message', message => {
  if (message.content === 'Date is 1/21/2021' ) {
    text12chennelhaha.send("Happy birthday <@482162074097549333>")
  }})

client.on('message', message => {
  if (message.content === 'Date is 4/24/2021' ) {
    text12chennelhaha.send("Happy birthday <@499591499122737153>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 6/1/2021' ) {
    text12chennelhaha.send("Happy birthday <@320264452874305536>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 6/20/2021' ) {
    text12chennelhaha.send("Happy birthday <@240226379596038146>")
  }})
client.on('message', message => {
  if (message.content === 'Date is 6/23/2021' ) {
    text12chennelhaha.send("Happy birthday <@321188857359892480>")
  }})

  })
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // BRAWLBALL TIME CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
const talkedRecently = new Set();
client.on("message", async message => {

  const prefix1 = "#";

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix1)) return;

  const args1 = message.content.slice(prefix1.length).trim().split(/ +/g);
  const cmd = args1.shift().toLowerCase();

  if (cmd === "bb") {
    
    let bbchannel = client.channels.cache.get("535540878991818762")
if(message.channel.id === "535540878991818762"){
      if (args1.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));

      const roleColor = message.guild.me.roles.highest.hexColor;

        var bbmsg = [ "Brawlball time is starting right now ! Join us room below",
        "What are you waiting for ? Join the brawlball room below right now",
      "It is time we show you who the masters are, come and challenge us in brawlball !",
      "Do you really think you don't need any training ? You're such a fool, come on !",
      "We're gonna play some pro brawlball right now, wanna join us ?",
      "Let's play brawlball ! Room bellow ;)",
      "Money is nothing if you don't have the skill to spend it right. Anyway join brawlball right now",
      "You have the right to choose : either you come and play brawlball now ; either you don't come and you get worse and worse day after day.",
      "Don't be shy, try to defeat us in brawlball, maybe we'll be kind enough to let you score once",
      "If you come and play insanely good with us, you might be our community highlights video ;)"]

      var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
      
      var bbccrndm = Math.floor(Math.random() * bbcolor.length)
      var bbclrchos = bbcolor[bbccrndm]

        var bbrandom = Math.floor(Math.random() * bbmsg.length)
      var bbchoose = bbmsg[bbrandom]
      if (args1[0] === "eu"){
        
    if(isNaN(args1.slice(1).join(" "))) return message.reply("Error : only Numbers and no spaces");
    else{
      if(args1[1].length === 6){
        if (talkedRecently.has(message.author.id)) {
          message.reply("Wait 30 minute before typing this again.");
      } else {

      let embed = new Discord.MessageEmbed()
            .setTitle('EU Brawlball Room')
            .setColor(bbclrchos)
            .setThumbnail('https://i.ibb.co/4tsGqzs/bb.png')
            .setDescription(bbchoose)
            .addField("The Room ","**"+args1.slice(1).join(" ")+"**",true)
            .setFooter(message.author.username,message.author.displayAvatarURL())
            
          bbchannel.send(embed);
          bbchannel.send("<@&812717125646286859>")
          talkedRecently.add(message.author.id);
          setTimeout(() => {
            talkedRecently.delete(message.author.id);
          }, 1800000);
      }
       
        }else message.reply("Error : only 6 numbers allowed")
      }
  }
  else if (args1[0] === "na"){
    
    if(isNaN(args1.slice(1).join(" "))) return message.reply("Error : only Numbers and no spaces");
    else{

      if(args1[1].length === 6){
        if (talkedRecently.has(message.author.id)) {
          message.reply("Wait 30 minute before typing this again.");
      } else {
    let embed = new Discord.MessageEmbed()
          .setTitle('NA Brawlball Room')
          .setColor(bbclrchos)
          .setThumbnail('https://i.ibb.co/4tsGqzs/bb.png')
          .setDescription(bbchoose)
          .addField("The Room ","**"+args1.slice(1).join(" ")+"**",true)
          .setFooter(message.author.username,message.author.displayAvatarURL())
          
        bbchannel.send(embed);
        bbchannel.send("<@&812717780217757716>")

        talkedRecently.add(message.author.id);
        setTimeout(() => {
          talkedRecently.delete(message.author.id);
        }, 1800000);
    }
     
      }else message.reply("Error : only 6 numbers allowed")
    }
      
}
else if (args1[0] === "all"){
   
    if(isNaN(args1.slice(1).join(" "))) return message.reply("Error : only Numbers and no spaces");
    else{
      if(args1[1].length === 6){
        if (talkedRecently.has(message.author.id)) {
          message.reply("Wait 30 minute before typing this again.");
      } else {

  let embed = new Discord.MessageEmbed()
        .setTitle('Brawlball Room')
        .setColor(bbclrchos)
        .setThumbnail('https://i.ibb.co/4tsGqzs/bb.png')
        .setDescription(bbchoose)
        .addField("The Room ","**"+args1.slice(1).join(" ")+"**",true)
        .setFooter(message.author.username,message.author.displayAvatarURL())
        
      bbchannel.send(embed);
      bbchannel.send("<@&727591689639952434>")
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 1800000);
  }
   
    }else message.reply("Error : only 6 numbers allowed")
  }
}
  else {message.reply("Error : Wrong command \n EX: \n #bb eu 128374 \n #bb NA 128374 \n #bb all 128374")  }
 
}
  else return message.channel.send("Wrong channel this command only work on #looking-for-brawlball")
  }
});
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // SOCIAL MEDIA CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on("message", message => {
  if (message.content === '!socials') {
      let embed = new Discord.MessageEmbed()
        .setTitle('Youtube')
        .setColor('0xc4302b')
        .setThumbnail('https://isgmh.northwestern.edu/files/2018/01/Social-media-icons-YouTube-2jkbocn.png')
        .setDescription('Subscribe Like and Share !')
        .addField('Link :','https://www.youtube.com/channel/UCKjydpFBrArBs5SoJnzw-Pg',true)
        .setFooter("\n\n Our Style - Brawlball ",client.user.avatarURL())
      message.channel.send(embed)
  }
})

client.on("message", message => {
  if (message.content === '!socials') {
      let embed = new Discord.MessageEmbed()
        .setTitle('Twitter')
        .setColor('0x00acee')
        .setThumbnail('https://cdn.iconscout.com/icon/free/png-512/twitter-circle-1868970-1583134.png')
        .setDescription('Follow to get the clan and Brawlball community news')
        .addField('Link :','https://twitter.com/ourstylebb', true)
        .setFooter("\n\n Our Style - Brawlball",client.user.avatarURL())
      message.channel.send(embed)
  }
})

client.on("message", message => {
  if (message.content === '!socials') {
      let embed = new Discord.MessageEmbed()
        .setTitle('Twitch')
        .setColor('0x6441a5')
        .setThumbnail('https://cdn3.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-twitch-circle-512.png')
        .setDescription('Follow or Subscribe and watch the Brawlball tournament here')
        .addField('Link :','https://www.twitch.tv/ourstyle_brawlball', true)
      message.channel.send(embed)
  }
})

client.on("message", message => {
  if (message.content === '!socials') {
      let embed = new Discord.MessageEmbed()
        .setTitle('Reddit')
        .setColor('0xFF4301')
        .setThumbnail('https://www.redditinc.com/assets/images/site/reddit-logo.png')
        .setDescription('Join our Reddit community to help it grow !')
        .addField('Link :','https://www.reddit.com/user/OurStyle', true)
        .setFooter("\n\n Our Style - Brawlball",client.user.avatarURL())
      message.channel.send(embed)
  }
})

client.on("message", message => {
  if (message.content === '!socials') {
      let embed = new Discord.MessageEmbed()
        .setTitle('Discord')
        .setColor('0x7289d9')
        .setThumbnail('https://cdn0.iconfinder.com/data/icons/free-social-media-set/24/discord-512.png')
        .setDescription('Join the clan discord server and find brawlball players')
        .setImage("https://i.ibb.co/Fmw9wYw/best-os-clan-logo.png")
        .addField('Link :','https://discord.gg/aMTafbd', true)
      message.channel.send(embed)
  }
})



////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // DM ALL OS PLAYERS CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////


client.on("message", async message => {
  const prefix = "!";

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  
  if (cmd === "sendall") {
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
      if (message.deletable) message.delete();
  
      if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
      
      const roleColor = message.guild.me.roles.highest.hexColor;

      if (args[0].toLowerCase() === "embed") {
          const embed = new Discord.MessageEmbed()
              .setDescription(args.slice(1).join(" "))
              .setColor("#000000")
  
          message.channel.send(embed);
      } else {
        client.users.fetch('482162074097549333', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('320264452874305536', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('321188857359892480', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('286209333488910336', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('314532481519058944', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('504543749293080597', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('423131212945817620', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('505751422449614878', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('286208201186213888', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('240226379596038146', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('364069557951922176', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('727301310461771797', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('666455281596891149', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('499591499122737153', false).then((user) => {
          user.send(args.join(" "));
         })
         client.users.fetch('456100864738983957', false).then((user) => {
          user.send(args.join(" "));
         })
         
          message.channel.send(args.join(" "));
      }
  }
  });
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // AVATAR CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  const prefix = "!";
  
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  
  if (cmd === "avatar") {
    if (message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
      message.reply("Commands aren't allowed  here")}
      else{
      if(!args.length){
      let embed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}`+"'s avatar")
        .setColor('RANDOM')
        .setImage(message.author.displayAvatarURL({size: 1024,dynamic : true}))
        message.channel.send(embed)
      }
        else{
          let member = message.mentions.users.first() || message.author
          let avatar = member.displayAvatarURL({size: 1024,dynamic : true})
          const embed = new Discord.MessageEmbed()
          .setTitle(`${member.username}'s avatar`)
          .setImage(avatar)
          .setColor("RANDOM")
  
          message.channel.send(embed);
     }}
     
  
}})
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // SAY CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
const prefix = "_";

if (message.author.bot) return;
if (!message.guild) return;
if (!message.content.startsWith(prefix)) return;

const args = message.content.slice(prefix.length).trim().split(/ +/g);
const cmd = args.shift().toLowerCase();

if (cmd === "ping") {
    const msg = await message.channel.send(`🏓 Pinging....`);

    msg.edit(`Latency is ${Math.floor(msg.createdTimestap - message.createdTimestap)}ms\nAPI Latency is ${Math.round(client.ping)}ms`);
}

if (cmd === "say") {
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
    if (message.deletable) message.delete();

    if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
    
    const roleColor = message.guild.me.roles.highest.hexColor;


    if (args[0].toLowerCase() === "embed") {
        const embed = new Discord.MessageEmbed()
            .setDescription(args.slice(1).join(" "))
            .setColor("#000000")

        message.channel.send(embed);
    } else {
        message.channel.send(args.join(" "));
        client.channels.cache.get("812453545878093854").send("<@"+message.author+"> used _say command and typed \n ```"+args.join(" ")+"```")

    }
}
});
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // SAY TO CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  const prefix = "_";
  
  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;
  
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const cmd = args.shift().toLowerCase();
  
  if (cmd === "sayto") {
      if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
  
      if (args.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));
  
      
     
       
        client.channels.cache.get(args[0].replace(/[^\d.-]/g, '')).send(args.slice(1).join(" ")).catch(err => { 
          console.error(err);
          message.channel.send("wrong ID")})
          client.channels.cache.get("812453545878093854").send("<@"+message.author+"> used _sayto command and typed \n ```"+args.join(" ")+"```")
  
      
  }
  });
  

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // EDIT SAY CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  const prefix1 = "_";


  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix1)) return;

  const args1 = message.content.slice(prefix1.length).trim().split(/ +/g);
  const cmd = args1.shift().toLowerCase();

  if (cmd === "edit") {
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
    let autsav =[]
    for (let i = 0; i < args1.length; i++) { autsav.push(args1[i])}
    autsav=autsav.join(" ")
    client.channels.cache.get("727390897016144012").send(autsav)
    if (message.deletable) message.delete();
      if (args1.length < 0) return message.reply(`Nothing to say?`).then(m => m.delete(5000));

            message.channel.messages.fetch({around: args1[0].toLowerCase(), limit: 1})
  .then(messages => {
            if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
else
messages.first().edit(args1.slice(1).join(" "));
client.channels.cache.get("812453545878093854").send("<@"+message.author+"> used edit command and typed \n ```"+args1.slice(1).join(" ")+"```")
})
  }
});
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // HELP CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if (message.content == '!codes'){          
      const embed = new Discord.MessageEmbed()
      .setTitle(client.user.username+' All Codes You Can Use')
      .setColor("#ff0000")
      .addField('!brawlball',"```To know how to play brawlball```",true)
      .addField('!run',"```show runner guide```",true)
      .addField('!sup',"```show supporter guide```",true)
      .addField('!def',"```show defenders guide ```",true)
      .addField('!rules',"```view rules```",true)
      .addField('!sr',"```view server rules```",true)
      .addField('!tr',"```view tournament rules```",true)
      .addField('!os clan',"```see info about (Our Style) clan```",true)
      .addField('!socials',"```show our style social media```",true)
      .addField('!avatar @anyname',"```display avatar of someone in the server```",true)
      .addField('!positions',"```view all runners and supporters and defender in the server```",true)
      .addField('%team (number of team members) (players name)',"```make random teams \n EX: %team 2 astru kevin danzo styleken```",false)
      .addField('#bb (region) (room number)',"```send message to looking-for-brawlball channel for brawlball room \n EX: \n #bb eu 128374 \n #bb NA 128374 \n #bb all 128374```",false)


     // .addField('!sup                               ',"To see all supporters in the server          ",true)
     // .addField('!def                                ',"To see all defenders in the server",true)
     // .addField('!ap                                  ',"To see which position and clan of every one in the server",true)
     // .addField('! @anyname                      ',"To see fav legend of someone in the server",true)
      //.addField('!run                                ',"To see all runners the server        \n ",true)
      //.addField('!p @anyname               ',"To see position and clan of someone in the server",true)

      .setThumbnail("https://i.ibb.co/XXqJ3zR/codes.png")
      .setFooter("\n\n Our Style Brawlball Designed And Edited by OS Team",client.user.avatarURL())
      message.channel.send(embed)
  
    
  }
      })
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // NERF ROLL CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === '!sgame' ) {

      let embed = new Discord.MessageEmbed()
      .setTitle('---New Nerf Roll match started PRIVATE---')
      .setColor('#FF0000')
      .setThumbnail('https://i.ibb.co/cTHfBpQ/kooko.png')
      .setDescription('**Here is the rules (code still not finished to publish)**')
      .addField('**1.** ',' **Every player gets one nerf**',false)
      .addField("**2.** "," **If you cheat, you have to commit suicide and you'll get two new nerfs on the next game**",false)
      .addField('**3.** ',' **If you cheat when you have a team nerf, you (only) have to commit suicide and all the team members will get two new nerfs on the next game**',false)
      .addField("**4.** "," **Please play fair and try not to spam. If you've cheated, say it or we'll kick you**",false)
      .addField('**___________** ',' **To enter the nerf roll 👍 \n\n To enter new nerf roll 👇 **',false)
      message.channel.send(embed)
          .then(function (message) {
            message.react("👍")
            message.react("👇")
          
          }).catch(function() {
            //Something
          });

  }})



  client.on('messageReactionAdd', (messageReaction, user) => {
  
    // Deal with command

  const { message, emoji } = messageReaction;
  if(message.channel.id === '705155467881742516'){
  
  if(emoji.name == '👇') {
  
    if(user.bot)  return;

  let embed = new Discord.MessageEmbed()
  .setTitle('*-*--New Nerf Roll* match *started---')
  .setColor('#FF0000')
  .setThumbnail('https://i.ibb.co/cTHfBpQ/kooko.png')
  .setDescription('**Here is the rules**')
  .addField('**1.** ',' **Every player gets one nerf**',false)
  .addField("**2.** "," **If you cheat, you have to commit suicide and you'll get two new nerfs on the next game**",false)
  .addField('**3.** ',' **If you cheat when you have a team nerf, you (only) have to commit suicide and all the team members will get two new nerfs on the next game**',false)
  .addField("**4.** "," **Please play fair and try not to spam. If you've cheated, say it or we'll kick you**",false)
  .addField('**___________** ',' **To enter the nerf roll 👍 \n\n To enter new nerf roll 👇 **',false)
  message.channel.send(embed)
  .then(function (message) {
    message.react("👍")
    message.react("👇")
  })
  }
  }})

  client.on('messageReactionAdd', (messageReaction, user) => {
  
      // Deal with command
  
    const { message, emoji } = messageReaction;
    if(message.channel.id === '705155467881742516'){
    if(emoji.name == '👍') {

      var message_options = ["Can't attack",
      "Only defend (stay in your scoring area)",
      "Can't taunt",
      "Can't throw the ball",
      "Can't attack without a weapon (throws allowed)",
      "Can only hold the ball for 7 sec",
      "Can't hold the ball",
      "Stay on the opponent's goal",
      "Can't dodge/dash while holding the ball",
      "Can't jump while holding the ball",
      "Suicide when losing the ball",
      "Score 3 goals",
      "Keep jumping (spam the jump button)",
      "Can't score without down pass / down selfpass",
      "TEAM NERF - Can't score without taunting",
      "TEAM NERF - Pass the ball at least 4 times before scoring)",
      "TEAM NERF - Can't use a weapon",
      "Can only throw weapons (can't attack with it)",
      "Stand still for 3 sec every 15 sec (set timer) ",
      "TEAM NERF - KO one or more opponents before each goal",
      "TEAM NERF - Every team member needs to get KO'd by the opponent ",
      "Can't go in the opponent scoring area",
      "Can't land on the middle of the arena (Only the scoring areas)",
      "TEAM NERF -  Do an Alley-oop",
      "TEAM NERF - Go back to your scoring area when you lose the ball in the scoring area",
      "Can't take the ball twice in a row without an opponent taking it",
      "Can't take the ball twice in a row without a team member taking it",
      "Can't take the ball twice in a row without a player taking it",
      "Can only do unarmed sigs (no weapon, no light or air attack)",
      "Can only do ground pound attacks (throws allowed)",
      "TEAM NERF - Use Azoth",
      "TEAM NERF - Use Koji",
      "TEAM NERF - Use Bödvar",
      "TEAM NERF - Use Isaiah",
      "TEAM NERF - Use Queen Nai with 2 speed",
      "GAME NERF - 300% damage","GAME NERF - Team Damage On","GAME NERF -  Must use Axe legend",
      "GAME NERF - YELLOW MAN SPAM"]
    var random_index = Math.floor(Math.random() * message_options.length)
    var chosen_message = message_options[random_index]
    message.guild.members.fetch(user.id).then(member => {
      if(user.bot)  return;
    else { let embed = new Discord.MessageEmbed()
    .setTitle(user.username)
    .setColor('#ffff00')
    .setDescription(chosen_message)
  
    message.channel.send(embed)}
    })
    }}});
    


////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // CLEAR CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
      if (message.content === '!strt' ) {
          if(!message.member.hasPermission(["MANAGE_MESSAGES", "ADMINISTRATOR"])) return message.channel.send("You do not have permission to  this")
  else{
          message.channel.messages.fetch({limit: 99})
  .then(function(list){
      message.channel.bulkDelete(list,true);
  }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        

  }}})

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // BRAWLBALL MOVES CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

/*const channel3 = client.channels.cache.get("613662955522752516")
client.on('message', message => {
  if (message.content === '!brawlball') {
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
else{
          const embed = new Discord.MessageEmbed()
          
          .setTitle(' Which do you wanna tryna learn ? : ')
          .setColor(0xFFFFFF)
          .setDescription('1.Down Pass Move (Combos One Player) ===> !@ \n\n 2. Up Pass Move (Combos One Player) ===> !#\n\n 3. Tags Moves (Blackhols 2 Player)===> !$  \n\n 4. Tricks ===> !% \n\n 5. Others ===> !^ \n\n Designed By OS Team :)')
      
          client.channels.cache.get("613662955522752516").send(embed)
  }}
})
client.on('message', message => {
if (message.content === '!@') {
  if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
  else{
        const embed = new Discord.MessageEmbed()
        
        .setTitle('Down Pass Brawlball Move it Consists of five steps : ')
        .setColor(0xFFFF00)
        .setDescription('\n\n 1. Leave The Wall And Dodge Left Or Right (depend on which side you play) \n\n 2. Throw The Ball Up ( Without Jumping Just Throw Button And Aim Up ) \n\n 3. Do Recovery To Catch The Ball \n\n 4. Jump 2 Times Slowly \n\n 5. Dodge Up To Touch The Wall \n\n https://drive.google.com/file/d/1FfiNTu6czLBpXZUrtr7Vbhl_aGz-iFS1/view?usp=sharing \n\n Designed By OS Team :)')
        
        client.channels.cache.get("613662955522752516").send(embed)
      }}
})
client.on('message', message => {
  if (message.content === '!#') {
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
    else{
          const embed = new Discord.MessageEmbed()
          
          .setTitle('Up Pass Brawlball Move it Consists of five steps : ')
          .setColor(0x00BFFF)
          .setDescription('\n\n 1. Go Top Of Ur Base Tower And Jump Up And Left Or Right (depend on which side u play) \n\n 2. Dodge Aiming Up + Left Or Right  \n\n 3. Throw The Ball Up  ( Without Jumping Just Throw Button And Aim Up ) \n\n 4. Punch Up On Heavy Button Attack To Catch The Ball  \n\n 5. Jump 1 Time  \n\n 6. And Dodge One Time \n\n  Designed By OS Team :)')
          client.channels.cache.get("613662955522752516").send(embed)
}}
})*/
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // TESTING CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
    
  if (message.content === '!hi') {
    message.reply(`Yoooo What Can i Do For You ? \n 1- !who @anyname \n 2- !avatar @anyname \n 3- !os clan \n 4- !help \n 5- !socials`);

    var d = new Date();

    message.channel.send("Date is : "+d.toLocaleDateString())
    
}
})
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // OS CLAN CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

client.on('message', message => {
  if (message.content === '!os clan') {
      const embed = new Discord.MessageEmbed()

          .setTitle('Our Style Brawlball Clan ')
          .setColor(0xf60af8)
          .setThumbnail(client.user.avatarURL())
          .setDescription('Here we are friends who where gathered by the love of brawlball. There are no leaders, just players')
          .addField('Teams', 'Runner - Supporter - Defender \n Substitute', false)
          .setFooter('We are Our style and we will make brawlball great again', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7KXpsrfkAhUl5uAKHf1DCLMQjRx6BAgBEAQ&url=https%3A%2F%2Fwallpaperstock.net%2Fs-logo-design-wallpapers_w35374.html&psig=AOvVaw3rIPgPX0g2OY5GqmOi0ph1&ust=1567694238587809%27')
    message.channel.send(embed)
  }
})


client.on('message', message => {
  if (message.content === '!os clan') {
      const embed = new Discord.MessageEmbed()

          .setTitle('Team : A.S.K')
          .setColor(0xc44312)
          .setDescription('The Ace team in Our Style, they won both of the tourneys they did within the clan')
          .addField('Astru®', 'He is the perfect Runner and a f*cking good Supporter and Defender', true)
          .addField('\n Styleken', 'He is the Defender you want behind you but he can also Run and Support like no one else', true)
          .addField('\n Kenshiro', ' He is a beast as Supporter and wild in Defence and Run', true)
          .addField('\n Pentane', ' He is uncatchable Runner and great in Defence and Supporter', true)
      message.channel.send(embed)
  }
})


client.on('message', message => {
  if (message.content === '!os clan') {
      const embed = new Discord.MessageEmbed()

          .setTitle('Team : KeJiCT')
          .setColor(0x000000)
          .setDescription('The perfect Duo was joined by a third and they will show the power of Our Style players')
          .addField('jimm25', ' He is an insane Runner and surely great in Defence and Support', true)
          .addField('\n kevin1185', ' He so cool in Run and fantastic as Defender and Supporter', true)
          .addField('\n CTNS', 'He cannot be scored on when Defending and he is great in Run and Support', true)
      message.channel.send(embed)
  }
})


client.on('message', message => {
  if (message.content === '!os clan') {
      const embed = new Discord.MessageEmbed()

          .setTitle('Team : Danzo°s Bakery')
          .setColor(0x55e473)
          .setDescription('Dan got a great team by his side, they are here to prove their force as a team')
          .addField('DanzoDon', ' He is a godzila Runner and cool in Defence and Support', true)
          .addField('\n LordCroissant', ' He never crossed in Support and witty as Runner And Defender', true)
          .addField('\n Glaedr', ' He is a brilliant Defender and a Baguette Supporter and Runner', true)
      message.channel.send(embed)
  }
})


client.on('message', message => {
if (message.content === '!os clan') {
    const embed = new Discord.MessageEmbed()

        .setTitle('Team : Absolute Bangers')
        .setColor(0x2ebfe3)
        .setDescription('That is simple mathematics : old pro def + new pro def + new pro run = dream team')
        .addField('otmanezza', 'He is an unstoppable Runner and unbreakable Defender and Supporter', true)
        .addField('\n KaeptnKook', ' He is the best in Support and Defence and a 300IQ Runner', true)
        .addField('\n Sanmaay', ' She is not merciful as Defender and great in Runner and Supporter', true)
        .addField('\n JunusBiaz', 'He is just super as Defender and great in Run and Support', true)
    message.channel.send(embed)
}
})

client.on('message', message => {
  if (message.content === '!os clan') {
      const embed = new Discord.MessageEmbed()

          .setTitle('Our Style Players')
          .setColor(0x35127a)
          .setThumbnail('https://cdn.discordapp.com/icons/535515917518372884/1e076f469ba8e95ffe32620817a98a22.png')
          .setDescription('These guys are in Our Style for 2 reasons : they are insane brawlball players and they want to become even greater, do not be fools to underestimate us all')
          .addField('\n jinleehurb', ' He has an unbelievable Defence and is so good in Support and Run', true)
          .setFooter('Everyone in Our Style clan is able to kick you in all positions', 'https://www.google.com/url?sa=i&source=images&cd=&ved=2ahUKEwiR7KXpsrfkAhUl5uAKHf1DCLMQjRx6BAgBEAQ&url=https%3A%2F%2Fwallpaperstock.net%2Fs-logo-design-wallpapers_w35374.html&psig=AOvVaw3rIPgPX0g2OY5GqmOi0ph1&ust=1567694238587809')

      message.channel.send(embed)
  }
})


  ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // RULES CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if(message.content === "!rules") {
    let embed = new Discord.MessageEmbed()
    .setTitle('Server Rules')
    .setColor('#ff0000')
    .setThumbnail('https://i.ibb.co/9Tr5tq6/rules.png')
    .addField('__**RULES :**__',"**1. Be respectful** \n You can joke with friends but don't go overboard with it.\n **2. Don't spam** \n That's pretty much annoying for most people.\n **3. Racism and derogatory terms are not tolerated in this server.**\n No Racial slurs, even if it was meant as a joke. Swearing is allowed, but again, don't go overboard with it.\n **4. Anything illicit or malicious or NSFW (links,images,sounds etc) is strictly prohibited in this server.** \n You can only share NSFW stuff in #huris-people , try to avoid it in #memes \n **5. only @ certain amount of users in the server only if necessary.** \n If it's not important, don't use it. \n Failure to comply with the rules will be punished",true)
   .setFooter(' Questions? Contact the admins in the Our Style discord server.','https://i.ibb.co/52NNs9N/os-logo-the-final-and-best-one.png')

    message.channel.send(embed)
    let embed1 = new Discord.MessageEmbed()
    .setTitle('Tournaments Rules')
    .setColor('#ff0000')
    .setThumbnail('https://i.ibb.co/9Tr5tq6/rules.png')
    .addField('__**RULES :**__',"- Every kind of toxicity is forbidden, you can report toxic behaviour by DMing us on discord.\n\n- Every player has to be on time, you're allowed up to 5 minutes.\n - Every set is Best Of 3 games, and the grand finals is BO5, don't leave after losing one game. \n - There is a loser's bracket, don't quit the tournament after losing one match. \n - One team consists of 3 or 4 players, no more, no less. Uncompleted teams are disqualified.")
     .addField("The tournaments","are held for EU and NA players, giving EU priority on others, since most of the players are EU, and most of the US-E players lag less in EU than in the other way. But the players can decide before the set how they will play the games. If they're all NA, they can play on NA servers. If they are from both regions, they can play ,for example, 1 game EU and then 1 game US in the set. \n\n We use smash.gg to host our tournaments, just like Brawl League's tournaments and official ones. This implies that every team needs to check-in before each set, and report the games' results on the tournament's page in order to continue the tourney smoothly.")
    .addField("**IMPORTANT:** ","It often happens in Brawlhalla that players got disconnected because of bad internet or because the game crashes. When that happens, EVERYONE in the lobby must stop immediately and pause the game until the player rejoins. If that happens too much after the first game, you can decide to play 2v2 when a player disconnects. If there is any doubt, please send us a message regarding any disagreements before any discussion arises.\n\n If any of the rules above are not respected by any player, his entire team will not be rewarded for winning and the player or team will be banned from the next tournament.",true)
    .setFooter(' Questions? Contact the admins in the Our Style discord server.','https://i.ibb.co/52NNs9N/os-logo-the-final-and-best-one.png')

    message.channel.send(embed1)
}})
client.on('message', message => {
  if(message.content === "!sr") {
    let embed = new Discord.MessageEmbed()
    .setTitle('Server Rules')
    .setColor('#ff0000')
    .setThumbnail('https://i.ibb.co/9Tr5tq6/rules.png')
    .addField('__**RULES :**__',"**1. Be respectful** \n You can joke with friends but don't go overboard with it.\n **2. Don't spam** \n That's pretty much annoying for most people.\n **3. Racism and derogatory terms are not tolerated in this server.**\n No Racial slurs, even if it was meant as a joke. Swearing is allowed, but again, don't go overboard with it.\n **4. Anything illicit or malicious or NSFW (links,images,sounds etc) is strictly prohibited in this server.** \n You can only share NSFW stuff in #huris-people , try to avoid it in #memes \n **5. only @ certain amount of users in the server only if necessary.** \n If it's not important, don't use it. \n Failure to comply with the rules will be punished",true)
   .setFooter(' Questions? Contact the admins in the Our Style discord server.','https://i.ibb.co/52NNs9N/os-logo-the-final-and-best-one.png')

    message.channel.send(embed)
  }})
  client.on('message', message => {
    if(message.content === "!tr") {
      let embed = new Discord.MessageEmbed()
      .setTitle('Tournaments Rules')
      .setColor('#ff0000')
      .setThumbnail('https://i.ibb.co/9Tr5tq6/rules.png')
      .addField('__**RULES :**__',"- Every kind of toxicity is forbidden, you can report toxic behaviour by DMing us on discord.\n\n- Every player has to be on time, you're allowed up to 5 minutes.\n - Every set is Best Of 3 games, and the grand finals is BO5, don't leave after losing one game. \n - There is a loser's bracket, don't quit the tournament after losing one match. \n - One team consists of 3 or 4 players, no more, no less. Uncompleted teams are disqualified.")
       .addField("The tournaments","are held for EU and NA players, giving EU priority on others, since most of the players are EU, and most of the US-E players lag less in EU than in the other way. But the players can decide before the set how they will play the games. If they're all NA, they can play on NA servers. If they are from both regions, they can play ,for example, 1 game EU and then 1 game US in the set. \n\n We use smash.gg to host our tournaments, just like Brawl League's tournaments and official ones. This implies that every team needs to check-in before each set, and report the games' results on the tournament's page in order to continue the tourney smoothly.")
      .addField("**IMPORTANT:** ","It often happens in Brawlhalla that players got disconnected because of bad internet or because the game crashes. When that happens, EVERYONE in the lobby must stop immediately and pause the game until the player rejoins. If that happens too much after the first game, you can decide to play 2v2 when a player disconnects. If there is any doubt, please send us a message regarding any disagreements before any discussion arises.\n\n If any of the rules above are not respected by any player, his entire team will not be rewarded for winning and the player or team will be banned from the next tournament.",true)
      .setFooter(' Questions? Contact the admins in the Our Style discord server.','https://i.ibb.co/52NNs9N/os-logo-the-final-and-best-one.png')
  
      message.channel.send(embed)
    }})

    ////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // BRAWLBALL GUIDE CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
    
client.on('message', message => {
  if (message.content === '!def') {
    if ( message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
    message.reply("Commands aren't allowed  here")}
    else{
     const embed = new Discord.MessageEmbed()
          .setTitle('**BRAWLBALL DEFENDER GUIDE**')
          .setColor("#ff0000")
          .setThumbnail("https://i.ibb.co/nj1Cj5R/defender.png")
          .setDescription("Click [Here](https://docs.google.com/document/d/1N8ZLI5BwNHCE-lb3LmrtXpn53qHhpMnAnkOtxDOybbQ/edit?usp=sharing) To View The Guide")
          .setImage('https://i.ibb.co/m9wp6w6/defender-guide.png')
          .setFooter(client.user.username+" / Guide by BCS", client.user.avatarURL())
    message.channel.send(embed)
  }
}})
client.on('message', message => {
  if (message.content === '!run') {
    if (message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
      message.reply("Commands aren't allowed  here")}
      else{
    const embed = new Discord.MessageEmbed()
          .setTitle('**BRAWLBALL RUNNER GUIDE**')
          .setColor("#00008B")
          .setThumbnail("https://i.ibb.co/k6qNt3N/Runner.png")
          .setDescription("Click [Here](https://docs.google.com/document/d/1RJ-dsOWO45vVJFZPNPpibL2cwl3oGPnXCmIY-5Sa7O0/edit?usp=sharing) To View The Guide")
          .setImage('https://i.ibb.co/NtVq91j/runner-guide.png')
          .setFooter(client.user.username+" / Guide by BCS", client.user.avatarURL())
    message.channel.send(embed)
  }
}})
client.on('message', message => {
  if (message.content === '!sup') {
    if (message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
      message.reply("Commands aren't allowed  here")}
      else{
            const embed = new Discord.MessageEmbed()
          .setTitle('**BRAWLBALL SUPPORTER GUIDE**')
          .setColor("#FFFF00")
          .setThumbnail("https://i.ibb.co/t3B9KTN/supporter.png")
          .setDescription("Click [Here](https://docs.google.com/document/d/1Ho9EDdAyNlFyLD6pmAZFtjiJQjo47DsZD_Ash2XXL2U/edit?usp=sharing) To View The Guide")
          .setImage('https://i.ibb.co/XsbhyVD/sup-guide.png')
          .setFooter(client.user.username+" / Guide by BCS", client.user.avatarURL())
    message.channel.send(embed)
  }
}})




client.on('message', message => {
  if (message.content === '!brawlball') {
    if (message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
      message.reply("Commands aren't allowed  here")}
      else{
    const embed = new Discord.MessageEmbed()
    .setTitle('**BRAWLBALL RUNNER GUIDE**')
    .setColor("#00008B")
    .setThumbnail("https://i.ibb.co/k6qNt3N/Runner.png")
    .setDescription("Click [Here](https://docs.google.com/document/d/1RJ-dsOWO45vVJFZPNPpibL2cwl3oGPnXCmIY-5Sa7O0/edit?usp=sharing) To View The Guide")
    .setImage('https://i.ibb.co/NtVq91j/runner-guide.png')
    .setFooter(client.user.username+" / Guide by BCS", client.user.avatarURL())
message.channel.send(embed)

const embed1 = new Discord.MessageEmbed()
.setTitle('**BRAWLBALL SUPPORTER GUIDE**')
.setColor("#FFFF00")
.setThumbnail("https://i.ibb.co/t3B9KTN/supporter.png")
.setDescription("Click [Here](https://docs.google.com/document/d/1Ho9EDdAyNlFyLD6pmAZFtjiJQjo47DsZD_Ash2XXL2U/edit?usp=sharing) To View The Guide")
.setImage('https://i.ibb.co/XsbhyVD/sup-guide.png')
.setFooter(client.user.username+" / Guide by BCS", client.user.avatarURL())
message.channel.send(embed1)

const embed2 = new Discord.MessageEmbed()
    .setTitle('**BRAWLBALL DEFENDER GUIDE**')
    .setColor("#ff0000")
    .setThumbnail("https://i.ibb.co/nj1Cj5R/defender.png")
    .setDescription("Click [Here](https://docs.google.com/document/d/1N8ZLI5BwNHCE-lb3LmrtXpn53qHhpMnAnkOtxDOybbQ/edit?usp=sharing) To View The Guide")
    .setImage('https://i.ibb.co/m9wp6w6/defender-guide.png')
    .setFooter(client.user.username+" / Guide by BCS", client.user.avatarURL())
message.channel.send(embed2)
  }}
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // POLL VOTING CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on('message', message => {
  if(message.content === "!nou") {
console.log("work")}})
  client.on("message", async message => {

    const prefix = "!";
  
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
  
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
  
    if (cmd === "poll") { 
      if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
      let autsav =[]
      for (let i = 0; i < args.length; i++) { autsav.push(args[i])}
      autsav=autsav.join(" ")
      client.channels.cache.get("727390897016144012").send(autsav)
      if (message.deletable) message.delete();

      var kon=args[0]
      if(kon>20000){
const options = [
  '🇦',
  '🇧',
  '🇨',
  '🇩',
  '🇪',
  '🇫',
  '🇬',
  '🇭',
  '🇮',
  '🇯',
  '🇰',
  '🇱',
  '🇲',
  '🇳',
  '🇴',
  '🇵',
  '🇶',
  '🇷',
  '🇸',
  '🇹',
  '🇺',
  '🇻',
  '🇼',
  '🇽',
  '🇾',
  '🇿',
];
// Defining the question...
let question = [];

for (let i = 1; i < args.length; i++) {
  if (args[i].startsWith('"')) break;
  else question.push(args[i]);
}

question = question.join(' ');

// Defining the choices...
const choices = [];

const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
let match;
while (match = regex.exec(args.join(' '))) choices.push(match[2]);

// Creating and sending embed...
let content = [];
if (choices.length<20){
for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
content = content.join('\n\n');

var d = args[0]
function secondsToHms(d) {
  d = Number(d);
  var h = Math.floor(d / 3600000);
  var m = Math.floor(d % 3600000 / 60000);
  var s = Math.floor(d % 3600000 % 60000);
  var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
  return hDisplay + mDisplay + sDisplay; 
}


var embed = new Discord.MessageEmbed()
  .setColor('#8CD7FF')
  .setTitle(`**${question}**`)
  .setDescription(content +"\n\n Poll Time : "+secondsToHms(d))
  .setFooter(message.author.username,message.author.avatarURL())

  let msg = await message.channel.send(`:bar_chart: ${message.author} started a poll.`, embed)
  
    for (let i = 0; i < choices.length; i++)  msg.react(options[i]);
  

  let coco =[]
  const agree="🇦"
  const disagree="🇧"
 
    const reactions = await msg.awaitReactions(reaction => options.includes(reaction.emoji.name),{time :args[0]})
    for (let i = 0; i < choices.length; i++) coco.push(`${options[i]} ${choices[i]} **-** ${reactions.get(options[i]).count-1}`);
    coco = coco.join("\n")
      
    
  var embed4 = new Discord.MessageEmbed()
  .setColor('#8CD7FF')
  .setTitle(`**Final Results For :**`)
  .setDescription( `**${question}**\n\n`+ coco)
  .setFooter(message.author.username,message.author.avatarURL())
      
      message.channel.send(embed4);
      
}else message.reply("max 20")
   }else message.reply("timer must be higher than 20000") }})
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // EMBED SAY CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
client.on("message", async message => {
  if(message.content === "!os codes") {
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
    var embed4 = new Discord.MessageEmbed()
    .setColor('#8CD7FF')
    .setTitle(`HOW TO USE EZ COMMANDS (OS ONLY)`)
    .setDescription("Hi look at these")
    .setThumbnail("https://screenshots.gamebanana.com/img/ico/sprays/58f11d50c3c07.png")
    .addField("**!mk**","a command to make embed msg : \n after **!mk** type anything here for title , then type **[clr]** here type embed color(color code FF00FF) ,then type **[desc]** here type description(text) , then type **[img]** an image (URL) , then type **[thmb]** then thumbnail (URL) ,then type **[ftr]** here a footer(text), then type **[ftricon]** a footer icon (URL) \n\n **NOTE : ** \n **-**You Have to use these one by one like i sort them **([clr] then [desc] then img then [thmb] then [ftr] then [ftricon])** u can use any of them alone or together but u must keep the order \n\n  **-**IF you use [ftricon] its gonna require [ftr] first, but u can use [ftr] alone ez \n\n __**EX :**__ \n **!mk Brawlball [clr] #00ff00 [desc] Best Mode [img] https://bb.png [thmb] https://bb.png [ftr] Done [ftricon] https://bb.png** \n**▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**!poll**",'a command to make poll vote with timer it so ez nub look \n __**EX :**__ \n **!poll 30000 What do u prefer "hattori" "artemis" "orion" "kaya"** \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**')
    .addField("**_say**","a command to make the bot send a msg u wrote it ez \n __**EX :**__ \n **_say astru pro **\n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**_sayto**","a command to make the bot send a msg u wrote it to the channel id u typed \n __**EX :**__ \n **_sayto 594177565825171457 astru pro **\n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**_edit**","a command to edit bot msg , so go to a bot msg u wanna change right click then COPY ID and then use same as this \n __**EX:**__ \n **_edit 813510712063295538 Hi Guys EZPZ** \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**!birthday**", "to see **O**ur **S**tyle birthdays \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**!sgame**", "to start nerf roll on #nerf-roll \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**!hte**", "how to send embed \n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**!sendall**", "DM all os members **DONT USE IT ONLY FOR SO IMPORTANT THINGS**")
    .setFooter(client.user.username,client.user.avatarURL())
        
        message.channel.send(embed4);
        
  }
})
client.on("message", async message => {
  if(message.content === "!hte") {
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
    var embed4 = new Discord.MessageEmbed()
    .setColor('#8CD7FF')
    .setTitle(`Embed`)
    .setDescription("** Note : You have to put space before and after [] . \n\n First Type **!mk**  **")
    .setThumbnail("https://screenshots.gamebanana.com/img/ico/sprays/58f11d50c3c07.png")
    .addField("**[desc]**", "for Description")
    .addField("**[clr]**", "for Embed Color (00FF00)")
    .addField("**[img]**", "for image (only link)")
    .addField("**[thmb]**", "for Thumbnail (only link)")
    .addField("**[ftr]**", "for Footer")
    .addField("**[ftricon]**", "for Footer icon (only link) \n\n **▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬**")
    .addField("**LIKE**","```!mk text [clr] color [desc] text [img] URL [thmb] URL [ftr] text [ftricon] URL```")

    .setFooter(client.user.username,client.user.avatarURL())
        
        message.channel.send(embed4);
        
  }
})
client.on("message", async message => {

  const prefix = "!";

  if (message.author.bot) return;
  if (!message.guild) return;
  if (!message.content.startsWith(prefix)) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd === "mk") { 
    if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to  this")
    let autsav =[]
    for (let i = 0; i < args.length; i++) { autsav.push(args[i])}
    autsav=autsav.join(" ")
    client.channels.cache.get("727390897016144012").send(autsav)
    if (message.deletable) message.delete();

let title = [];
let desc=[]
let img=[]
let thumb=[]
let color=[]
let footer=[]
let footer2=[]
const embed = new Discord.MessageEmbed()
let oo="no"
let kk="no"
let ll="no"
let qq="no"
let ww="no"
let rr="no"
let rr2="no"
for (let i = 0; i < args.length; i++) {
  if (args[i].startsWith('[desc]')){for (let j = i+1; j < args.length; j++){i++; if(args[j].startsWith('[img]') || args[j].startsWith('[thmb]') || args[j].startsWith('[clr]') || args[j].startsWith('[ftr]')|| args[j].startsWith('[ftricon]') ){ i=j-1; break;} else { desc.push(args[j]);  kk="yes"}}}
  else if (args[i].startsWith('[img]')){for (let k = i+1; k < args.length; k++){i++;  if(args[k].startsWith('[desc]') || args[k].startsWith('[thmb]') || args[k].startsWith('[clr]') || args[k].startsWith('[ftr]')|| args[k].startsWith('[ftricon]') ){i=k-1; break;} else { img.push(args[k]);ll="yes"  }}}
  else if (args[i].startsWith('[thmb]')){for (let p = i+1; p < args.length; p++){i++ ; if(args[p].startsWith('[img]') || args[p].startsWith('[desc]') || args[p].startsWith('[clr]') || args[p].startsWith('[ftr]')|| args[p].startsWith('[ftricon]') ){i=p-1; break;} else { thumb.push(args[p]);qq="yes"  }}}
  else if (args[i].startsWith('[clr]')){for (let y = i+1; y < args.length; y++){i++;  if(args[y].startsWith('[img]') || args[y].startsWith('[thmb]') || args[y].startsWith('[desc]') || args[y].startsWith('[ftr]')|| args[y].startsWith('[ftricon]') ){i=y-1; break;} else { color.push(args[y]);ww="yes"  }}}
  else if (args[i].startsWith('[ftr]')){for (let r = i+1; r < args.length; r++){i++ ; if(args[r].startsWith('[img]') || args[r].startsWith('[thmb]') || args[r].startsWith('[clr]') || args[r].startsWith('[desc]')|| args[r].startsWith('[ftricon]') ){i=r-1; break;} else { footer.push(args[r]);rr="yes"  }}}
  else if (args[i].startsWith('[ftricon]')){for(let r2 = i+1; r2 < args.length;r2++){i++; if(args[r2].startsWith('[img]') || args[r2].startsWith('[thmb]') || args[r2].startsWith('[clr]') || args[r2].startsWith('[desc]')|| args[r2].startsWith('[ftr]') ){i=r2-1; break;} else { footer2.push(args[r2]);rr2="yes"  }}}
  else {title.push(args[i]);  oo="yes" ;}
  }
title = title.join(' ')
desc = desc.join(' ');
img = img.join(' ');
thumb = thumb.join(' ');
color = color.join(' ');
footer = footer.join(' ');
footer2 = footer2.join('');

if(oo==="yes")
embed.setTitle(title)
if(kk==="yes")
embed.setDescription(desc)
if(ll==="yes")
embed.setImage(img)
if(qq==="yes")
embed.setThumbnail(thumb)
if(ww==="yes")
embed.setColor(color)
if(rr==="yes")
embed.setFooter(footer)
if(rr2==="yes")
embed.setFooter(footer,footer2)

message.channel.send(embed).catch(err => { 
  console.error(err);
  message.channel.send("something wrong")
})
  }

})
client.on("error", () => { client.login(process.env.BOT_TOKEN)

});
////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // TimeOut CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////
// client.on("message", async message => {

//   const prefix = "!";

//   if (message.author.bot) return;
//   if (!message.guild) return;
//   if (!message.content.startsWith(prefix)) return;

//   const args = message.content.slice(prefix.length).trim().split(/ +/g);

//   const cmd = args.shift().toLowerCase();

//   if (cmd === "timeout") { 
//     if(!message.member.hasPermission(["MANAGE_MESSAGES"])) return message.channel.send("You do not have permission to this")

//     let member = message.mentions.members.first();

//   if(args[1].toLowerCase() === "1"){
//     member.roles.add('777199407883878401')

//     member.roles.remove('731528561969856622')
//     member.roles.remove('731528298445668442')
//     member.roles.remove('759441333584265247')
//     member.roles.remove('812452159773343765')
//     member.roles.remove('793151150479114252')
//     member.roles.remove('817726951962705930')

//     let embed = new Discord.MessageEmbed()
//     .setTitle("You have been timed out")
//     .setColor("#FF0000")
//     .setThumbnail(client.user.avatarURL())
//     .setDescription("Reason : You broke rule 1")
//     .addField("1. Be respectful","You can joke with friends but don't go overboard with it.")
//     .addField("The following roles have been removed:","OutCasts , Valorant , Minecraft , Rocket League , Among Us , Anime Otaku \n Get them back in #roles after your time out is finished by Removing your old reaction And react again")
//     .setFooter(message.author.username, message.author.avatarURL())

//   member.send(embed);     
//   message.channel.send(`${member} got timed out by `+message.author.username)
// }

//  //****************************************************************************************** */

//  else if(args[1].toLowerCase() === "2"){
//   member.roles.add('777199407883878401')
//   member.roles.remove('731528561969856622')
//   member.roles.remove('731528298445668442')
//   member.roles.remove('759441333584265247')
//   member.roles.remove('812452159773343765')
//   member.roles.remove('793151150479114252')
//   member.roles.remove('817726951962705930')

//   let embed = new Discord.MessageEmbed()
//   .setTitle("You have been timed out")
//   .setColor("#FF0000")
//   .setThumbnail(client.user.avatarURL())
//   .setDescription("Reason : You broke rule 2")
//   .addField("2. Don't spam"," That's pretty much annoying for most people.")
//   .addField("The following roles have been removed:","OutCasts , Valorant , Minecraft , Rocket League , Among Us , Anime Otaku \n Get them back in #roles after your time out is finished by Removing your old reaction And react again")
//   .setFooter(message.author.username, message.author.avatarURL())

// member.send(embed);     
// message.channel.send(`${member} got timed out by `+message.author.username)
// }

// //****************************************************************************************** */

// else if(args[1].toLowerCase() === "3"){
//   member.roles.add('777199407883878401')
//   member.roles.remove('731528561969856622')
//   member.roles.remove('731528298445668442')
//   member.roles.remove('759441333584265247')
//   member.roles.remove('812452159773343765')
//   member.roles.remove('793151150479114252')
//   member.roles.remove('817726951962705930')

//   let embed = new Discord.MessageEmbed()
//   .setTitle("You have been timed out")
//   .setColor("#FF0000")
//   .setThumbnail(client.user.avatarURL())
//   .setDescription("Reason : You broke rule 3")
//   .addField("3. Racism and derogatory terms are not tolerated in this server."," No Racial slurs, even if it was meant as a joke. Swearing is allowed, but again, don't go overboard with it.")
//   .addField("The following roles have been removed:","OutCasts , Valorant , Minecraft , Rocket League , Among Us , Anime Otaku \n Get them back in #roles after your time out is finished by Removing your old reaction And react again")
//   .setFooter(message.author.username, message.author.avatarURL())

//   member.send(embed);     
//   message.channel.send(`${member} got timed out by `+message.author.username)
// }

// //****************************************************************************************** */

// else if(args[1].toLowerCase() === "4"){
//   member.roles.add('777199407883878401')
//   member.roles.remove('731528561969856622')
//   member.roles.remove('731528298445668442')
//   member.roles.remove('759441333584265247')
//   member.roles.remove('812452159773343765')
//   member.roles.remove('793151150479114252')
//   member.roles.remove('817726951962705930')

//   let embed = new Discord.MessageEmbed()
//   .setTitle("You have been timed out")
//   .setColor("#FF0000")
//   .setThumbnail(client.user.avatarURL())
//   .setDescription("Reason : You broke rule 4")
//   .addField("4. Anything illicit or malicious or NSFW (links,images,sounds etc) is strictly prohibited in this server."," You can only share NSFW stuff in #huris-people , try to avoid it in #memes")
//   .addField("The following roles have been removed:","OutCasts , Valorant , Minecraft , Rocket League , Among Us , Anime Otaku \n Get them back in #roles after your time out is finished by Removing your old reaction And react again")
//   .setFooter(message.author.username, message.author.avatarURL())

//   member.send(embed);     
//   message.channel.send(`${member} got timed out by `+message.author.username)
// }

// //****************************************************************************************** */

// else if(args[1].toLowerCase() === "5"){
//   member.roles.add('777199407883878401')
//   member.roles.remove('731528561969856622')
//   member.roles.remove('731528298445668442')
//   member.roles.remove('759441333584265247')
//   member.roles.remove('812452159773343765')
//   member.roles.remove('793151150479114252')
//   member.roles.remove('817726951962705930')

//   let embed = new Discord.MessageEmbed()
//   .setTitle("You have been timed out")
//   .setColor("#FF0000")
//   .setThumbnail(client.user.avatarURL())
//   .setDescription("Reason : You broke rule 5")
//   .addField("5. only @ certain amount of users in the server only if necessary."," If it's not important, don't use it.")
//   .addField("The following roles have been removed:","OutCasts , Valorant , Minecraft , Rocket League , Among Us , Anime Otaku \n Get them back in #roles after your time out is finished by Removing your old reaction And react again")
//   .setFooter(message.author.username, message.author.avatarURL())

//   member.send(embed);     
//   message.channel.send(`${member} got timed out by `+message.author.username)
// }
//   else message.channel.send("wrong command")
// }})


////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // DELETE IMG CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

// client.on("message", async message => {
//   if ( message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
//     if(message.attachments.size > 0) {
//         message.delete();
//         message.reply("You can't send any files here. Share them in the correct channel. ")
//         .then(msg => {
//           setTimeout(() => msg.delete(), 10000)
//           })
//          .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);  
//       }
//     }})

    
//     client.on("message", async message => {
//       if ( message.channel.id === "759441730805825578"|| message.channel.id === "812651063022321674"|| message.channel.id === "793256406559227914"|| message.channel.id === "723287151357329539"|| message.channel.id === "730386275806347325"|| message.channel.id === "793256715885608960"|| message.channel.id === "535540529379672074"|| message.channel.id === "734397358091141130"|| message.channel.id === "732313729428881499") {
//         if(message.content.includes('http')) {
//           if(message.content.includes('discord.gg/') || message.content.includes('discordapp.com/invite/')) {
//             message.delete();
//             message.reply("You can't send any Discord invites here. Share them in the correct channel.")
//             .then(msg => {
//               setTimeout(() => msg.delete(), 10000)
//               })
//           }
//           else{
//             message.delete();
//             message.reply("You can't send any links here. Share them in the correct channel.")
//          .then(msg => {
//           setTimeout(() => msg.delete(), 10000)
//           })
//          .catch(/*Your Error handling if the Message isn't returned, sent, etc.*/);
//           }
//         }
//         }})













        const recustnxtday = new Set();
        const recrecntly = new Set();
        client.on("message", async message => {
          if(message.content === "!supports") {
            if(message.channel.id === "865839402851631124"){
            if (recustnxtday.has(message.author.id)) {
            message.reply("your able to use this command once a day")
            .then(msg => {
              setTimeout(() => msg.delete(), 10000)
              })
            }
            else {
              recrecntly.add(message.author.id) 
            var embed4 = new Discord.MessageEmbed()
            .setColor('#8CD7FF')
            .setTitle(`Recuist to OS II`)
            .setDescription("React with :mag_right: if you want to Recruit")
            .setColor("#0000ff")
            .setThumbnail("https://icon-library.com/images/recruiter-icon/recruiter-icon-8.jpg")
            .addField("1","<@321188857359892480>",true)
            .addField("2",'<@423131212945817620>',true)
            .addField("3","<@805879974363791420>",true)
            .addField("4","<@727301310461771797>",true)
            .addField("5","<@286208201186213888>",true)
            .setImage("https://i.ibb.co/7SXDrrh/eeeeeeeeerg.png")
            .setFooter(message.author.username,message.author.avatarURL())
           
                message.channel.send(embed4)
                .then(function (message) {
              message.react("🔎") 
               
                     })
          }}
          else{message.channel.send("this command only work on <#865839402851631124>")}
        }
      
      })
        client.on('messageReactionAdd', (messageReaction, user) => {

          //os II support add
          
            const { message, emoji } = messageReaction;
            if(message.channel.id == '865839402851631124'){
            if(emoji.name == "🔎") {
          
            message.guild.members.fetch(user.id).then(member => {
              if(user.bot)  return;
            else { 
              if (recustnxtday.has(message.author.id)) {
                message.reply("this message is too old or its not yours u need to type !supports and react")
                .then(msg => {
                  setTimeout(() => msg.delete(), 10000)
                  })
                }
                else {
              if (recrecntly.has(user.id)) {
              const channel90 = member.guild.channels.cache.get("867712063832850441")
              channel90.send("<@"+user.id +"> Requested a supporter for clan recruit <@&856213123701538876>")
              if (message.deletable) message.delete();
              message.channel.send("<@"+user.id + "> Your request has been sent")
              recrecntly.delete(user.id);
              recustnxtday.add(user.id);
              setTimeout(() => {
                recustnxtday.delete(user.id);
              }, 86400000);
            }
          else { user.send("this message is too old or its not yours u need to type !supports and react")}}
          }})
            }}});











////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
                            // WELCOME CODE //
///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////

client.on("guildMemberAdd", member => {
  const channel2 = member.guild.channels.cache.get("535540529379672074")
  channel2.send(`${member} has joined to Our Style server`)
member.roles.add("603386617620856852")
})

    

  client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get("613400026978320395")
    if (!channel) return 
      number = 9
  
  var images = ["https://i.ibb.co/RQssbF9/f1.gif","https://i.ibb.co/gj3xmST/f10.gif","https://i.ibb.co/1Q1Gmt3/f9.gif","https://i.ibb.co/VNxGT6D/f3.gif","https://i.ibb.co/Gs7k5GN/f2.gif","https://i.ibb.co/wy6Gq3R/f5.gif","https://i.ibb.co/1KpxSbQ/f6.gif","https://i.ibb.co/WyqnDNN/f8.gif","https://i.ibb.co/jZP60q0/f7.gif"];
  var image = Math.floor(Math.random() * images.length);
  


      var bbmsg = [ `OMG !!! Is that you  ${member} Welcome Dude `,
      `Hey  ${member} Welcome to Our Style `,
      `Great we're glad you came  ${member} :wink: `,
      `Well well well look who is here Guys ${member}`,
      `I have to tell you something come here ~WELCOME~  ${member} :neutral_face: `,
      `Is that you, wait no. You are ${member} Anyway Welcome `]

    var bbcolor = [ "#FF0000","#0000FF","#000000","#FFFF00","#FFFFFF","#800080","#008000","#808080","#ADD8E6"]
    
    var bbccrndm = Math.floor(Math.random() * bbcolor.length)
    var bbclrchos = bbcolor[bbccrndm]

      var bbrandom = Math.floor(Math.random() * bbmsg.length)
    var bbchoose = bbmsg[bbrandom]
    let embed = new Discord.MessageEmbed()
          .setTitle(member.user.username+" "+"`Has joined to Our Style server`")
          .setColor(bbclrchos)
          .setThumbnail(member.user.avatarURL())
          .setDescription(bbchoose)
          .setImage(String([images[image]]))
          
        channel.send(embed);        
        })
//client.login("NzkzMzA1MzAyMjYyNzQzMDYw.X-qVIg.79yR8ep98bDz0I4d_31iM3m23Qo")
client.login(process.env.BOT_TOKEN)
