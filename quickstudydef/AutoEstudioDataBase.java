package com.example.quickstudydef;

import android.content.ContentValues;
import android.content.Context;
import android.database.Cursor;
import android.database.sqlite.SQLiteDatabase;
import android.database.sqlite.SQLiteOpenHelper;

import java.util.ArrayList;
import java.util.List;

public class AutoEstudioDataBase extends SQLiteOpenHelper {

    private static final int DATABASE_VERSION = 1;

    private static final String DATABASE_NAME = "AEManager",
            TABLE_AE = "ae",
            KEY_ID = "id",
            KEY_MATERIA = "materia",
            KEY_PREGUNTA = "pregunta",
            KEY_RESPUESTA = "respuesta";

    public AutoEstudioDataBase(Context context){
        super(context,DATABASE_NAME,null,DATABASE_VERSION);
    }


    @Override
    public void onCreate(SQLiteDatabase db){
        db.execSQL("CREATE TABLE " + TABLE_AE + "(" + KEY_ID + " INTEGER PRIMARY KEY AUTOINCREMENT,"
                + KEY_MATERIA + " TEXT," + KEY_PREGUNTA + " TEXT," + KEY_RESPUESTA + " TEXT)");
    }


    @Override
    public void onUpgrade(SQLiteDatabase db,int oldVersion,int newVersion){
        db.execSQL("DROP TABLE IF EXISTS " + TABLE_AE);

        onCreate(db);
    }

    public void createPregunta(AutoEstudioLista ae){
        SQLiteDatabase db = getWritableDatabase();

        ContentValues values = new ContentValues();

        values.put(KEY_MATERIA,ae.getMateria());
        values.put(KEY_PREGUNTA,ae.getPregunta());
        values.put(KEY_RESPUESTA,ae.getRespuesta());

        db.insert(TABLE_AE,null,values);
        db.close();

    }

    public void borrarPregunta(AutoEstudioLista ae){
        SQLiteDatabase db = getWritableDatabase();
        db.delete(TABLE_AE, KEY_ID + "=?", new String[]{String.valueOf(ae.getId())});
        db.close();
    }


    public int getPreguntaCount(){
        SQLiteDatabase db = getReadableDatabase();
        Cursor cursor = db.rawQuery("SELECT * FROM " + TABLE_AE,null);
        int count = cursor.getCount();
        db.close();
        cursor.close();

        return count;
    }

    public List<AutoEstudioLista> getAllPreguntas(){
        List<AutoEstudioLista> ae = new ArrayList<AutoEstudioLista>();

        SQLiteDatabase db = getWritableDatabase();
        Cursor cursor = db.rawQuery("SELECT * FROM " + TABLE_AE,null);

        if(cursor.moveToFirst()){
            do{
                ae.add(new AutoEstudioLista(Integer.parseInt(cursor.getString(0)),cursor.getString(1),cursor.getString(2),cursor.getString(3)));
            }
            while (cursor.moveToNext());
        }
        cursor.close();
        db.close();
        return ae;
    }

}
