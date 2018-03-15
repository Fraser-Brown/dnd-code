import java.io.*;

public class WeaponGenerator {
    public static void main(String args[]) throws IOException {
        fileGenerator();
    }

    public static void fileGenerator() throws IOException {
        FileReader fr = new FileReader("weapons.txt");
        BufferedReader reader = new BufferedReader(fr);

        BufferedWriter writer = new BufferedWriter(new FileWriter("weaponDetails.txt"));
        String line;
        while ((line = reader.readLine()) != null){

            line = line.replaceAll(",", "");
            String[] wepDetails = line.split(" ");

            writer.write("'" + wepDetails[0]);
            writer.write( "' : {'name' : '" + wepDetails[0] + "' ," );
            writer.write("'cost' : { '" + wepDetails[2] +"' : '" + wepDetails[1] + "'}");
            writer.write(" ,'dmgDice' : '" + wepDetails[3]);
            writer.write("' ,'dmgType' : '" + wepDetails[4]);
            writer.write("' ,'weight' : " + wepDetails[5] + ",");
            writer.write("'type' : 'simple' ,");
            String properties = "'properties' : [";

            for (int i = 7; i < wepDetails.length; i++ ){
                properties += "'" + wepDetails[i] + "',";
            }

            properties += "] },";
            writer.write(properties);
            writer.newLine();
        }

        writer.close();
        reader.close();
    }
}
