package com.prime5chat.chatter.Controllers;

import com.prime5chat.chatter.controllers.GroupController;
import com.prime5chat.chatter.models.ChatChannel;
import com.prime5chat.chatter.services.GroupServices;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import static org.mockito.Mockito.when;
import org.mockito.MockitoAnnotations;

import java.util.ArrayList;

public class GroupControllerTests {

    @Mock
    private GroupServices groupServices;

    @InjectMocks
    private GroupController groupController;

    @Before
    public void doThisFirst() {
        MockitoAnnotations.initMocks(this);
    }

    @Test
    public void testCreateChannel() {
        ChatChannel channel1 = new ChatChannel("Channel 1", true);
        when(groupServices.createChannel(channel1)).thenReturn(channel1);
        Assert.assertEquals(channel1, groupController.createChannel(channel1));
    }

    @Test
    public void testGetPublicChannels() {
        ArrayList<ChatChannel> publicChannels = new ArrayList<>();
        publicChannels.add(new ChatChannel("Public Channel 1", true));
        publicChannels.add(new ChatChannel("Public Channel 2", true));
        publicChannels.add(new ChatChannel("Public Channel 3", true));

        when(groupServices.getPublicChannels()).thenReturn(publicChannels);
        Assert.assertEquals(publicChannels, groupController.getPublicChannels());
    }
}
