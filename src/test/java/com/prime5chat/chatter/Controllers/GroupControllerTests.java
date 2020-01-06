package com.prime5chat.chatter.Controllers;

import com.prime5chat.chatter.controllers.GroupController;
import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.services.GroupServices;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;

import org.mockito.MockitoAnnotations;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.List;

@RunWith(MockitoJUnitRunner.class)
public class GroupControllerTests {

    @Mock
    private GroupServices groupServices;

    @InjectMocks
    private GroupController groupController;

    private MockMvc mockMvc;

    @Before
    public void doThisFirst(){
        MockitoAnnotations.initMocks(this);
        mockMvc = MockMvcBuilders.standaloneSetup(groupController).build();
    }

    @Test
    public void testGetPublicChannels(){
        ArrayList<ChatChannel> publicChannels = new ArrayList<>();
        publicChannels.add(new ChatChannel("Public Channel 1", true));
        publicChannels.add(new ChatChannel("Public Channel 2", true));
        publicChannels.add(new ChatChannel("Public Channel 3", true));

        when(groupServices.getPublicChannels()).thenReturn(publicChannels);
        Assert.assertEquals(publicChannels, groupController.getPublicChannels());


    }

    @Test
    public void testCreateChannel(){
        ChatChannel channel1 = new ChatChannel("Channel 1", true);
        when(groupServices.createChannel(channel1)).thenReturn(channel1);
        Assert.assertEquals(channel1, groupController.createChannel(channel1));
    }
}
