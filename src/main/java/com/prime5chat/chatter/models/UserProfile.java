package com.prime5chat.chatter.models;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Lob;

@Entity
public class UserProfile {

    @Id
    private String USER_NAME;
    private String STATE;
    private String BIO;
    @Lob
    private byte USER_PICTURE;

    public String getUSER_NAME() {
        return USER_NAME;
    }

    public void setUSER_NAME(String USER_NAME) {
        this.USER_NAME = USER_NAME;
    }

    public String getSTATE() {
        return STATE;
    }

    public void setSTATE(String STATE) {
        this.STATE = STATE;
    }

    public String getBIO() {
        return BIO;
    }

    public void setBIO(String BIO) {
        this.BIO = BIO;
    }

    public byte getUSER_PICTURE() {
        return USER_PICTURE;
    }

    public void setUSER_PICTURE(byte USER_PICTURE) {
        this.USER_PICTURE = USER_PICTURE;
    }
}
