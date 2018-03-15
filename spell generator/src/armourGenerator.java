import java.io.*;

public class armourGenerator {
    public static void main(String args[]) throws IOException {
        fileGenerator();
    }

    public static void fileGenerator() throws IOException {
        FileReader fr = new FileReader("armourDetails.txt");
        BufferedReader reader = new BufferedReader(fr);

        BufferedWriter writer = new BufferedWriter(new FileWriter("armour.txt"));
        String line;
        while ((line = reader.readLine()) != null){

            line = line.replaceAll(",", "");
            String[] armDetails = line.split(" ");

            writer.write("'" + armDetails[0]);
            writer.write( "' : {'name' : '" + armDetails[0] + "' ," );
            writer.write("'cost' : { '" + armDetails[2] +"' : '" + armDetails[1] + "'}");
            writer.write(" ,'ac' : '" + armDetails[3]);
            //writer.write("' ,'mod' : '" + armDetails[5] + "' ,");
            //writer.write("' ,'modMax' : '" + 2 + "' ,");
            writer.write("' , 'type' : 'heavy' ,");
            writer.write("'strength' : '" + armDetails[5] + "' ," );
            writer.write("'stealth' : '" + armDetails[6] + "' ," );
            writer.write("'weight' : '" + armDetails[7] + "'}," );

            writer.newLine();
        }

        writer.close();
        reader.close();
    }
}
