package com.example.quickstudydef;

import android.support.design.widget.TabLayout;
import android.support.v4.view.ViewPager;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.Toolbar;
import android.view.View;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TabHost;
import android.widget.Toast;

import com.example.quickstudydef.tabViewContent.ViewPagerAdapter;

import java.util.ArrayList;
import java.util.List;


public class AutoEstudioActivity extends AppCompatActivity {

    private Toolbar toolbar;
    private ViewPager viewPager;
    private ViewPagerAdapter adapter;
    private TabLayout tabLayout;

    private static final int  BORRAR = 1;
    List<AutoEstudioLista> AEList = new ArrayList<AutoEstudioLista>();
    ListView AEListView;
    Button iniciar, detener;

    AutoEstudioDataBase dbHandler;
    int  longClick;
    ArrayAdapter<AutoEstudioLista> arrayAdapter;


    public EditText materia,pregunta,respuesta;


    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.auto_estudio_content);

        toolbar = findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        viewPager = findViewById(R.id.pager);
        adapter = new ViewPagerAdapter(getSupportFragmentManager());
        viewPager.setAdapter(adapter);


        tabLayout = findViewById(R.id.tabs);
        tabLayout.setupWithViewPager(viewPager);

        materia = findViewById(R.id.materia);
        pregunta = findViewById(R.id.pregunta);
        respuesta = findViewById(R.id.respuesta);




    }

}
