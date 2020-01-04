package com.prime5chat.chatter.controllers;

import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.services.ChannelServices;
import com.prime5chat.chatter.services.UserServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController

@RequestMapping("/channels")
public class ChannelController {

    @Autowired
    private UserServices userService;
    @Autowired
    private ChannelServices channelService;


    private ChatChannel defaultChannel;


    public ChannelController(ChannelServices channelService) {
        this.channelService = channelService;
    }


    @PostMapping
    public ResponseEntity<ChatChannel> createDefaultChannel() {
        for (ChatChannel channel : findAll().getBody()) {
            if (channel.getCHANNELNAME().equals("Main Channel")) {
                return new ResponseEntity<>(channel, HttpStatus.CONFLICT);
            }
        }
        return new ResponseEntity<>(channelService.create(defaultChannel), HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<Iterable<ChatChannel>> findAll() {
        return new ResponseEntity<>(channelService.findByIsPrivate(false), HttpStatus.OK);
    }
    @GetMapping("/private")
    public ResponseEntity<Iterable<ChatChannel>> findAllPrivate(){
        return new ResponseEntity<>(channelService.findByIsPrivate(true), HttpStatus.OK);
    }

    @GetMapping("/private/{username}")
    public ResponseEntity<Iterable<ChatChannel>> findAllPMsOfAUser(@PathVariable String username){
        return new ResponseEntity<>(channelService.findAllPMsOfAUser(userService.findByUsername(username)), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ChatChannel> findById(@PathVariable Long id){
        return new ResponseEntity<>(channelService.findById(id), HttpStatus.OK);
    }

    @GetMapping("/getByName/{name}")
    public ResponseEntity<ChatChannel> findByName(@PathVariable String name){
        return new ResponseEntity<>(channelService.findByChannelName(name), HttpStatus.OK);
    }


    @PutMapping("/{id}/update")
    public ResponseEntity<ChatChannel> updateChannel(@PathVariable Long id, @RequestParam String channelName) {
        return new ResponseEntity<>(channelService.updateChannel(id, channelName), HttpStatus.OK);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Boolean> delete(@PathVariable Long id){
        return new ResponseEntity<>(channelService.delete(id), HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/all")
    public ResponseEntity<Boolean> deleteAll(){
        return new ResponseEntity<>(channelService.deleteAll(), HttpStatus.NOT_FOUND);
    }
}




