package com.movieapp;

import com.facebook.react.ReactActivity;
import com.BV.LinearGradient.LinearGradientPackage; // <--- This!
public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "movieApp";
  }
}
