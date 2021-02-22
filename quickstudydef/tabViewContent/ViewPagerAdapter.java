package com.example.quickstudydef.tabViewContent;

import android.support.annotation.Nullable;
import android.support.v4.app.Fragment;
import android.support.v4.app.FragmentManager;
import android.support.v4.app.FragmentPagerAdapter;

public class ViewPagerAdapter extends FragmentPagerAdapter {

    public ViewPagerAdapter(FragmentManager fm) {
        super(fm);
    }

    @Override
    public Fragment getItem(int i) {
        switch (i){
            case 0:
                return new CreateFragment();
            case 1:
                return new VisualizeFragment();
            default:
                return null;
        }
    }

    @Override
    public int getCount() {
        //numero de tabs
        return 2;
    }

    @Nullable
    @Override
    public CharSequence getPageTitle(int i){
        switch (i){
            case 0:
                return  "Crear";
            case 1:
                return  "Visualizar";
            default:
                return null;


        }

    }

}
