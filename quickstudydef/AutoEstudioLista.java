package com.example.quickstudydef;

public class AutoEstudioLista {
    private String _materia,_pregunta,_respuesta;
    private int _id;

    public AutoEstudioLista(int id,String materia,String pregunta,String respuesta){
        _id = id;
        _materia = materia;
        _pregunta = pregunta;
        _respuesta = respuesta;
    }

    public int getId(){return _id;}
    public String getMateria(){return  _materia;}
    public String getPregunta(){return  _pregunta;}
    public String getRespuesta(){return  _respuesta;}
}
