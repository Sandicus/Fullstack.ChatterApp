package com.prime5chat.chatter.models;

import javax.persistence.*;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;


@Entity
@Table
public class Message {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long MSG_ID;

    private String CHANNEL_NAME;
    private String USER_NAME;
    private String MESSAGE;
    private MessageType MESSAGE_TYPE;
    private String MSG_TIMESTAMP = formatDate(new Date());



    public Long getMSG_ID() {
        return MSG_ID;
    }

    public void setMSG_ID(Long id) {
        this.MSG_ID = id;
    }

    public String getMSG_TIMESTAMP() {
        return MSG_TIMESTAMP;
    }

    public void setMSG_TIMESTAMP(String timestamp) {
        this.MSG_TIMESTAMP = timestamp;
    }

    public enum MessageType{
        CHAT, LEAVE, JOIN, NOTAMESSAGE
    }

    public String getMESSAGE() {
        return MESSAGE;
    }

    public void setMESSAGE(String content) {
        this.MESSAGE = content;
    }

    public String getUSER_NAME() {
        return USER_NAME;
    }

    public void setUSER_NAME(String sender) {
        this.USER_NAME = sender;
    }

    public MessageType getMESSAGE_TYPE() {
        return MESSAGE_TYPE;
    }

    public void setMESSAGE_TYPE(MessageType type) {
        this.MESSAGE_TYPE = type;
    }

    public String formatDate(Date date){
        DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
        return dateFormat.format(date);
    }

    public String getCHANNEL_NAME() {
        return CHANNEL_NAME;
    }

    public void setCHANNEL_NAME(String CHANNEL_NAME) {
        this.CHANNEL_NAME = CHANNEL_NAME;
    }
}