package com.example.quickstudydef.tabViewContent;


import android.os.Build;
import android.os.Bundle;
import android.support.annotation.RequiresApi;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.AdapterView;
import android.widget.ArrayAdapter;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ListView;
import android.widget.TextView;
import android.widget.Toast;

import com.example.quickstudydef.AutoEstudioDataBase;
import com.example.quickstudydef.AutoEstudioLista;
import com.example.quickstudydef.R;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


/**
 * A simple {@link Fragment} subclass.
 */
public class CreateFragment extends Fragment {


    public Button btnAgregar;
    public EditText materia,pregunta,respuesta;
    public AutoEstudioDataBase dbHandler;
    public ArrayAdapter<AutoEstudioLista> arrayAdapter;
    public CreateFragment() {
        // Required empty public constructor
    }


    @RequiresApi(api = Build.VERSION_CODES.KITKAT)
    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {

        View view = inflater.inflate(R.layout.fragment_create, container, false);
        materia = view.findViewById(R.id.materia);
        pregunta = view.findViewById(R.id.pregunta);
        respuesta = view.findViewById(R.id.respuesta);
        dbHandler = new AutoEstudioDataBase(getContext());

        btnAgregar = view.findViewById(R.id.btnAgregar);
        btnAgregar.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(respuesta.getText().toString().equals("")){
                    Toast.makeText(getContext(),"Necesita una respuesta",Toast.LENGTH_SHORT).show();
                }else {
                    AutoEstudioLista ae = new AutoEstudioLista(dbHandler.getPreguntaCount(),String.valueOf(materia.getText()),String.valueOf(pregunta.getText()),String.valueOf(respuesta.getText()));

                        dbHandler.createPregunta(ae);
                        //AEList.add(ae);
                        arrayAdapter.notifyDataSetChanged();
                        materia.setText("");
                        pregunta.setText("");
                        respuesta.setText("");
                        Toast.makeText(getContext(),
                                "Pregunta agregada", Toast.LENGTH_SHORT).show();

                }


            }
        });


        return view;

    }




}




