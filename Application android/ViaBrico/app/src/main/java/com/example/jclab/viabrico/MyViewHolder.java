package com.example.jclab.viabrico;

import android.support.v7.widget.RecyclerView;
import android.view.View;
import android.widget.TextView;

public class MyViewHolder extends RecyclerView.ViewHolder {
    private TextView textViewTextView = null;

    public MyViewHolder (View itemView) {
        super(itemView);
        textViewTextView = (TextView) itemView.findViewById(R.id.mytextview);
    }
    public TextView getTextViewTextView(){
        return getTextViewTextView();
    }
}