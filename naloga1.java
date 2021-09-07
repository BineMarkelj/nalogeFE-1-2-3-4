import java.util.*;

class naloga1 {
    public static void main(String[] args) {

        int i = 0;
        System.out.println(i);
        for (i = 1; i <= 100; i++) {
            if (i % 3 == 0) {
                if (i % 5 == 0) {
                    System.out.println("Trojka in Petka");
                } else {
                    System.out.println("Trojka");
                }
            } else if (i % 5 == 0) {
                System.out.println("Petka");
            } else {
                System.out.println(i);
            }
        }


    }
}