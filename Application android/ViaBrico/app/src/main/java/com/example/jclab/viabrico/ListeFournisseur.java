package com.example.jclab.viabrico;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;

import java.util.ArrayList;
import java.util.List;

public class ListeFournisseur extends AppCompatActivity {

    private RecyclerView recyclerView;
    private RecyclerView.Adapter mAdapter;
    private RecyclerView.LayoutManager layoutManager;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_liste_fournisseur);
        recyclerView = (RecyclerView) findViewById(R.id.my_recycler_view);

        // layout manager, décrivant comment les items sont disposés :
        LinearLayoutManager layoutManager = new LinearLayoutManager(this);
        recyclerView.setLayoutManager(layoutManager);

        List<Fournisseur> listFournisseurs = new ArrayList<>();
        listFournisseurs.add(new Fournisseur("F1", "yes", "sey","vegfe","grjnekf"));
        listFournisseurs.add(new Fournisseur("F2","yes", "sey","vegfe","grjnekf"));

        mAdapter = new MyAdapter(listFournisseurs);
        recyclerView.setAdapter(mAdapter);
    }
    }

