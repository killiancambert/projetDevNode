package com.example.jclab.viabrico;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.Toast;

public class MainActivity extends AppCompatActivity {

    EditText login_edit_name, login_edit_password;
    Button connexion_btn;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        LoginButton();
    }

    public void LoginButton(){
        login_edit_name = (EditText)findViewById(R.id.edit_name);
        login_edit_password = (EditText)findViewById(R.id.edit_password);
        connexion_btn = (Button)findViewById(R.id.connexion_btn);

        connexion_btn.setOnClickListener(
                new View.OnClickListener() {
                    @Override
                    public void onClick(View v) {
                        if (login_edit_name.getText().toString().equals("test") &&
                        login_edit_password.getText().toString().equals("test")){
                            Toast.makeText(MainActivity.this,"Username and password is correct",
                                    Toast.LENGTH_SHORT).show();
                            Intent intent = new Intent(MainActivity.this, ListeFournisseur.class);
                            MainActivity.this.startActivity(intent);
                        }
                        else {
                            Toast.makeText(MainActivity.this,"Username and password is NOT correct",
                                    Toast.LENGTH_SHORT).show();
                        }
                    }
                }
        );
    }
}
