import DashboardIcon from '@mui/icons-material/Dashboard';
import BarChartIcon from '@mui/icons-material/BarChart';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MonitorHeartIcon from '@mui/icons-material/MonitorHeart';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PersonIcon from '@mui/icons-material/Person';
import InsightsIcon from '@mui/icons-material/Insights';
import { SvgIconComponent } from '@mui/icons-material';

export const navIcons: Record<string, SvgIconComponent> = {
  dashboard: DashboardIcon,
  predictions: InsightsIcon,
  appointments: CalendarTodayIcon,
  vitals: MonitorHeartIcon,
  report: BarChartIcon,
  user: PersonIcon,
  users: PersonIcon,
};
