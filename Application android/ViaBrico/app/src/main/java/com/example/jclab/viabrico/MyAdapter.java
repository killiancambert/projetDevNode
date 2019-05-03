package com.example.jclab.viabrico;

import android.support.v7.widget.RecyclerView;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.TextView;

import java.util.List;

public class MyAdapter extends RecyclerView.Adapter<MyViewHolder>{

    private List<Fournisseur> listFournisseur = null;

    public MyAdapter(List<Fournisseur> listFournisseur){
        this.listFournisseur = listFournisseur;
    }

    @Override
    public MyViewHolder onCreateViewHolder(ViewGroup parent, int viewType){
        View viewFournisseur;
        viewFournisseur = LayoutInflater.from(parent.getContext()).inflate(R.id.my_text_view, parent, false);
        return new MyViewHolder(viewFournisseur);
    }

    @Override
    public void onBindViewHolder(MyViewHolder holder, int position){
        holder.getTextViewTextView().setText(listFournisseur.get(position).getNom());
    }

    @Override
    public int getItemCount(){
        return listFournisseur.size();
    }
}


/*public class MyAdapter extends RecyclerView.Adapter<MyAdapter.MyViewHolder> {
    private List<Fournisseur> mDataset;

    public static class MyViewHolder extends RecyclerView.ViewHolder {
        public TextView textView = null ;

        public MyViewHolder(TextView v) {
            super(v);
            textView = (TextView) itemView.findViewById(R.id.mytextview);
        }
    }

    // Provide a suitable constructor (depends on the kind of dataset)
    public MyAdapter(List<Fournisseur> listFournisseur) {
        mDataset = listFournisseur;
    }

    // Create new views (invoked by the layout manager)
    @Override
    public MyAdapter.MyViewHolder onCreateViewHolder(ViewGroup parent,
                                                     int viewType) {
        // create a new view
        TextView v = (TextView) LayoutInflater.from(parent.getContext())
                .inflate(R.layout.my_text_view, parent, false);
        MyViewHolder vh = new MyViewHolder(v);
        return vh;
    }

    // Replace the contents of a view (invoked by the layout manager)
    @Override
    public void onBindViewHolder(MyViewHolder holder, int position) {
        // - get element from your dataset at this position
        // - replace the contents of the view with that element
        holder.textView.setText((CharSequence) mDataset.get(position));

    }

    @Override
    public int getItemCount() {
        return 0;
    }*/



