package com.example.jclab.viabrico;

public class Fournisseur {

    private String nom;
    private String desc;
    private String addr;
    private String tel;
    private String mail;

    public Fournisseur(String nom, String desc, String addr, String tel, String mail) {
        this.nom = nom;
        this.desc = desc;
        this.addr = addr;
        this.tel = tel;
        this.mail = mail;
    }

    public String getNom() {
        return nom;
    }

    public String getDesc() {
        return desc;
    }

    public String getAddr() {
        return addr;
    }

    public String getTel() {
        return tel;
    }

    public String getMail() {
        return mail;
    }
}
